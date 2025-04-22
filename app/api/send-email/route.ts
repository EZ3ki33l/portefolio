import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, prenom, email, societe, motif, message } = body;

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
    return NextResponse.json({ error });
  }
} 