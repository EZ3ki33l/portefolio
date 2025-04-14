export interface Formation {
  id: number;
  title: string;
  school: string;
  period: string;
  description: string;
  skills: string[];
}

export const formations: Formation[] = [
  {
    id: 1,
    title: "Bachelor Front-end web developper",
    school: "Studi",
    period: "En cours",
    description: "Formation intensive en développement web full stack JavaScript",
    skills: ["Typescript", "React.js", "Next.js", "Angular", "Nest.js", "Postgresql"]
  },
  {
    id: 2,
    title: "Master 2 Villes et Territoires",
    school: "Université Toulouse - Jean Jaurès",
    period: "2014",
    description: "Spécialité habitat, Aménagement et gestion / développement du territoire - Mention assez-bien (13,5)",
    skills: ["Aménagement du territoire", "Urbanisme", "Développement territorial"]
  },
  {
    id: 3,
    title: "Chargé d'affaires et de gestion en immobilier (INSIM)",
    school: "TBS Education",
    period: "2010",
    description: "Formation spécialisée dans le secteur immobilier",
    skills: ["Gestion immobilière", "Transaction immobilière", "Développement immobilier"]
  }
]; 