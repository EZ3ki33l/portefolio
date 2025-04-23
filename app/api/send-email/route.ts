import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Configuration du rate limiting
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 requêtes par heure
  analytics: true,
});

const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction de validation des entrées
function validateInput(data: any) {
  // Vérification des champs requis
  if (!data.nom || !data.prenom || !data.email || !data.motif || !data.message) {
    return { isValid: false, error: 'Tous les champs obligatoires doivent être remplis.' };
  }

  // Validation des longueurs
  if (data.nom.length > 100 || data.prenom.length > 100 || 
      data.email.length > 255 || (data.societe && data.societe.length > 100) || 
      data.message.length > 2000) {
    return { isValid: false, error: 'Certains champs dépassent la longueur maximale autorisée.' };
  }

  // Validation du format d'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { isValid: false, error: 'Format d\'email invalide.' };
  }

  // Validation des caractères autorisés pour le nom et prénom
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  if (!nameRegex.test(data.nom) || !nameRegex.test(data.prenom)) {
    return { isValid: false, error: 'Le nom et le prénom contiennent des caractères non autorisés' };
  }

  // Validation du message contre les injections
  const messageRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?()'"-]+$/;
  if (!messageRegex.test(data.message)) {
    return { isValid: false, error: 'Le message contient des caractères non autorisés' };
  }

  // Validation des motifs autorisés
  const allowedMotifs = ['projet', 'emploi', 'collaboration', 'autre'];
  if (!allowedMotifs.includes(data.motif)) {
    return { isValid: false, error: 'Motif de contact invalide.' };
  }

  // Vérification du timestamp (pour éviter les soumissions trop rapides)
  if (data.timestamp) {
    const submissionTime = new Date(data.timestamp).getTime();
    const now = new Date().getTime();
    if (now - submissionTime < 1000) { // 1 seconde minimum entre les soumissions
      return { isValid: false, error: 'Soumission trop rapide.' };
    }
  }

  return { isValid: true };
}

export async function POST(request: Request) {
  try {
    // Vérification du rate limiting
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const { success } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Trop de tentatives. Veuillez réessayer plus tard.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { nom, prenom, email, societe, motif, message, timestamp } = body;

    // Validation des entrées
    const validation = validateInput(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || '',
      subject: `Nouveau message de contact - ${motif}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Nouveau message de contact</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                text-align: center;
                padding: 20px 0;
                border-bottom: 2px solid #038C8C;
              }
              .logo {
                max-width: 150px;
                height: auto;
              }
              .content {
                padding: 20px 0;
              }
              .info-block {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 5px;
                margin: 10px 0;
              }
              .footer {
                text-align: center;
                padding: 20px 0;
                border-top: 2px solid #038C8C;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <img src="https://qu19rm474m.ufs.sh/f/CmXxO6H1yhgIPVOp0owknWocyf5IqrLE8mtxUeXgvPKRph4F" alt="Logo" class="logo">
              <h1 style="color: #038C8C; margin-top: 20px;">Nouveau message de contact</h1>
            </div>
            
            <div class="content">
              <div class="info-block">
                <h2 style="color: #038C8C; margin-top: 0;">Informations du contact</h2>
                <p><strong>Nom:</strong> ${nom} ${prenom}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${societe ? `<p><strong>Société:</strong> ${societe}</p>` : ''}
                <p><strong>Motif:</strong> ${motif}</p>
              </div>

              <div class="info-block">
                <h2 style="color: #038C8C; margin-top: 0;">Message</h2>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>

            <div class="footer">
              <p>Ce message a été envoyé depuis le formulaire de contact de votre portfolio.</p>
              <p>© ${new Date().getFullYear()} Romain ROUSSET. Tous droits réservés.</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message.' },
      { status: 500 }
    );
  }
} 