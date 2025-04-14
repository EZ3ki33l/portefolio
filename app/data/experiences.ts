export interface Experience {
  id: string; // Format: 'YYYY-MM'
  endDate: string; // Format: 'YYYY-MM'
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id : "2023-09",
    endDate: "2023-09",
    title: "Gestionnaire immobilier",
    company: "Cabinet Bedin Immobilier",
    period: "mars 2023 - septembre 2023 · 6 mois",
    description: [
      "Gestion locative de biens immobiliers",
      "Suivi des loyers et charges",
      "Gestion des relations locataires",
      "Maintenance et entretien des biens",
    ],
    technologies: [
      "Logiciel de gestion immobilière",
      "Comptabilité locative",
      "Réglementation immobilière",
      "Gestion des sinistres",
    ],
  },
  {
    id: "2023-02", // Date de fin
    endDate: "2023-02",
    title: "Conseiller logiciel gestion immobilière",
    company: "Septeo Pôle Immobilier",
    period: "juin 2017 - février 2023 · 5 ans 9 mois",
    description: [
      "Référent logiciel SDGI Gérance",
      "Mission de conseils en comptabilité / gestion immobilière",
      "Accompagnement et formation sur le logiciel",
      "Mission de suivis des évolutions/correctifs et de tests",
    ],
    technologies: [
      "SDGI",
      "Gestion immobilière",
      "Formation",
      "Support utilisateur",
      "Tests logiciels",
    ],
  },
  {
    id: "2016-05",
    endDate: "2016-05",
    title: "Assistant programmes / développement",
    company: "Nacarat",
    period: "février 2016 - mai 2016 · 4 mois",
    description: [
      "Assistant du responsable programme et du directeur foncier",
      "Suivi ADV et administratif",
      "Création de documents commerciaux",
      "Réalisation d'études de marchés",
      "Rédaction de comités d'engagements",
      "Rédaction de concours (ZAC)",
    ],
    technologies: [
      "Gestion de projet",
      "Études de marché",
      "Documentation commerciale",
    ],
  },
  {
    id: "2014-07",
    endDate: "2014-07",
    title: "Chargé d'études",
    company: "Action Logement",
    period: "mai 2014 - juillet 2014 · 3 mois",
    description: [
      "Réalisation d'une étude sur le logement des jeunes actifs",
      "Synthèse d'ouvrages, réalisation de bases de données",
      "Cartographies, entretiens avec des jeunes actifs",
      "Benchmarking et élaboration de documents de synthèse",
    ],
    technologies: ["Analyse de données", "Cartographie", "Études statistiques"],
  },
  {
    id: "2013-07",
    endDate: "2013-07",
    title: "Chargé d'études",
    company: "Conseil Régional Midi-Pyrénées",
    period: "mai 2013 - juillet 2013 · 3 mois",
    description: [
      "Mission de création de bases de données en vue de création de fiches profil des territoires, fiches bassins de vie, et zones d'emploi",
    ],
    technologies: ["Analyse de données", "Cartographie", "Études statistiques"],
  },
  {
    id: "2010-09",
    endDate: "2010-09",
    title: "Développeur foncier",
    company: "France Terre",
    period: "avril 2010 - septembre 2010 · 6 mois",
    description: [
      "Mission d'assistanat du directeur développement foncier",
      "Analyse des plans locaux d'urbanisme",
      "Études de faisabilité",
      "Rédaction d'études de marché",
      "Dossiers sur les grands projets immobiliers",
    ],
    technologies: [
      "Urbanisme",
      "Études de marché",
      "Développement foncier",
      "Analyse PLU",
    ],
  },
];
