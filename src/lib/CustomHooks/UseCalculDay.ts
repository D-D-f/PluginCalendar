interface resultat {
  nbJourDuMois: number;
  premierJourDuMois: string;
}

const calculDateDay = (
  numMois: number,
  annee: number,
  dateDuMois: number
): resultat => {
  let nbJours = 0;
  let anneeBissextile = annee % 4 === 0;

  switch (numMois) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      nbJours = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      nbJours = 30;
      break;

    default:
      nbJours = anneeBissextile ? 29 : 28;
      break;
  }

  let laDate = new Date();
  laDate.setDate(dateDuMois);
  laDate.setFullYear(annee);
  laDate.setMonth(numMois - 1);
  let premierJour = laDate.getDay().toLocaleString("fr");

  return { nbJourDuMois: nbJours, premierJourDuMois: premierJour };
};

export default calculDateDay;
