let civs = [
  {
    name: "Britons",
    wasSelectedBefore: false,
    gotoUnit: ['archers'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/a/ae/CivIcon-Britons.png",
  },
  {
    name: "Byzantines",
    wasSelectedBefore: false,
    gotoUnit: ['archers', 'navy'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/2/27/CivIcon-Byzantines.png",
  },
  {
    name: "Celts",
    wasSelectedBefore: false,
    gotoUnit: ['infantry', 'siege'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/5/59/CivIcon-Celts.png",
  },
  {
    name: "Chinese",
    wasSelectedBefore: false,
    gotoUnit: ['archers'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/cc/CivIcon-Chinese.png",
  },
  {
    name: "Franks",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/1b/CivIcon-Franks.png",
  },
  {
    name: "Goths",
    wasSelectedBefore: false,
    gotoUnit: ['infantry'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/2/24/CivIcon-Goths.png",
  },
  {
    name: "Japanese",
    wasSelectedBefore: false,
    gotoUnit: ['infantry', 'archers'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/9/9a/CivIcon-Japanese.png",
  },
  {
    name: "Mongols",
    wasSelectedBefore: false,
    gotoUnit: ['archers', 'siege'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/10/CivIcon-Mongols.png",
  },
  {
    name: "Persians",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/a/ad/CivIcon-Persians.png",
  },
  {
    name: "Saracens",
    wasSelectedBefore: false,
    gotoUnit: ['archers', 'navy'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/5/59/CivIcon-Saracens.png",
  },
  {
    name: "Teutons",
    wasSelectedBefore: false,
    gotoUnit: ['infantry', 'cavalry', 'siege'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/3/3f/CivIcon-Teutons.png",
  },
  {
    name: "Turks",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry', 'archers'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/1c/CivIcon-Turks.png",
  },
  {
    name: "Vikings",
    wasSelectedBefore: false,
    gotoUnit: ['infantry', 'archers', 'navy'],
    isIncluded: true,
    dlc: "The Age of Kings",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/c9/CivIcon-Vikings.png",
  },
  {
    name: "Aztecs",
    wasSelectedBefore: false,
    gotoUnit: ['infantry', 'eagles', 'monks', 'archers'],
    isIncluded: true,
    dlc: "The Conquerors",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/0c/CivIcon-Aztecs.png",
  },
  {
    name: "Huns",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry'],
    isIncluded: true,
    dlc: "The Conquerors",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/17/CivIcon-Huns.png",
  },
  {
    name: "Koreans",
    wasSelectedBefore: false,
    gotoUnit: ['archers', 'siege', 'navy'],
    isIncluded: true,
    dlc: "The Conquerors",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/7/73/CivIcon-Koreans.png",
  },
  {
    name: "Mayans",
    wasSelectedBefore: false,
    gotoUnit: ['eagles', 'archers'],
    isIncluded: true,
    dlc: "The Conquerors",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/05/CivIcon-Mayans.png",
  },
  {
    name: "Spanish",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry', 'monks', 'navy'],
    isIncluded: true,
    dlc: "The Conquerors",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/0a/CivIcon-Spanish.png",
  },
  {
    name: "Incas",
    wasSelectedBefore: false,
    gotoUnit: ['archers', 'eagles'],
    isIncluded: true,
    dlc: "The Forgotten",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/5/5e/CivIcon-Incas.png",
  },
  {
    name: "Indians",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry'],
    isIncluded: true,
    dlc: "The Forgotten",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/8/8b/CivIcon-Indians.png",
  },
  {
    name: "Italians",
    wasSelectedBefore: false,
    gotoUnit: ['archers', 'navy'],
    isIncluded: true,
    dlc: "The Forgotten",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/e/e1/CivIcon-Italians.png",
  },
  {
    name: "Magyars",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry', 'archers'],
    isIncluded: true,
    dlc: "The Forgotten",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/6/68/CivIcon-Magyars.png",
  },
  {
    name: "Slavs",
    wasSelectedBefore: false,
    gotoUnit: ['infantry', 'cavalry', 'siege'],
    isIncluded: true,
    dlc: "The Forgotten",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/12/CivIcon-Slavs.png",
  },
  {
    name: "Berbers",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry','navy'],
    isIncluded: true,
    dlc: "The African Kindoms",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/7/71/CivIcon-Berbers.png",
  },
  {
    name: "Ethiopians",
    wasSelectedBefore: false,
    gotoUnit: ['archers','siege'],
    isIncluded: true,
    dlc: "The African Kindoms",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/cb/CivIcon-Ethiopians.png",
  },
  {
    name: "Malians",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry', 'infantry'],
    isIncluded: true,
    dlc: "The African Kindoms",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/8/80/CivIcon-Malians.png",
  },
  {
    name: "Portuguese",
    wasSelectedBefore: false,
    gotoUnit: ['archers', 'navy'],
    isIncluded: true,
    dlc: "The African Kindoms",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/6/60/CivIcon-Portuguese.png",
  },
  {
    name: "Burmese",
    wasSelectedBefore: false,
    gotoUnit: ['monks'],
    isIncluded: true,
    dlc: "Rise of the Rajas",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/7/79/CivIcon-Burmese.png",
  },
  {
    name: "Khmer",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry', 'archers'],
    isIncluded: true,
    dlc: "Rise of the Rajas",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/e/ec/CivIcon-Khmer.png",
  },
  {
    name: "Malay",
    wasSelectedBefore: false,
    gotoUnit: ['archers'],
    isIncluded: true,
    dlc: "Rise of the Rajas",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/c3/CivIcon-Malay.png",
  },
  {
    name: "Vietnamese",
    wasSelectedBefore: false,
    gotoUnit: ['archers'],
    isIncluded: true,
    dlc: "Rise of the Rajas",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/07/CivIcon-Vietnamese.png",
  },
  {
    name: "Bulgarians",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry', 'infantry'],
    isIncluded: true,
    dlc: "Definitive Edition",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/ce/CivIcon-Bulgarians.png",
  },
  {
    name: "Cumans",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry'],
    isIncluded: true,
    dlc: "Definitive Edition",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/cc/CivIcon-Cumans.png",
  },
  {
    name: "Lithuanians",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry', 'monks'],
    isIncluded: true,
    dlc: "Definitive Edition",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/0d/CivIcon-Lithuanians.png",
  },
  {
    name: "Tatars",
    wasSelectedBefore: false,
    gotoUnit: ['archers', 'cavalry'],
    isIncluded: true,
    dlc: "Definitive Edition",
    lastPicked: null,
    icon:
      "https://vignette.wikia.nocookie.net/ageofempires/images/f/f2/CivIcon-Tatars.png",
  },
  {
    name: "Burgundians",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry'],
    isIncluded: true,
    dlc: "Lords of the West",
    lastPicked: null,
    icon:
      "https://static.wikia.nocookie.net/ageofempires/images/5/5e/Menu_techtree_burgundians.png",
  },
  {
    name: "Sicilians",
    wasSelectedBefore: false,
    gotoUnit: ['archers', 'infantry'],
    isIncluded: true,
    dlc: "Lords of the West",
    lastPicked: null,
    icon:
      "https://static.wikia.nocookie.net/ageofempires/images/7/7f/Menu_techtree_sicilians.png",
  },
  {
    name: "Poles",
    wasSelectedBefore: false,
    gotoUnit: ['cavalry'],
    isIncluded: true,
    dlc: "Dawn of the Dukes",
    lastPicked: null,
    icon:
      "https://static.wikia.nocookie.net/ageofempires/images/9/98/Poles_Icon.png",
  },
  {
    name: "Bohemians",
    wasSelectedBefore: false,
    gotoUnit: ['monks', 'siege', 'archers'],
    isIncluded: true,
    dlc: "Dawn of the Dukes",
    lastPicked: null,
    icon:
      "https://static.wikia.nocookie.net/ageofempires/images/a/a1/Bohemians_Icon.png",
  }
];

civs.map(
  (c) => (c.wikiLink = "https://ageofempires.fandom.com/wiki/" + c.name)
);

let unitStrats = new Set();
for (let c of civs) {
    for (let u of c.gotoUnit) {
	unitStrats.add(u);
    }
}

export const civilizations = civs;
export const unitStrategies = Array.from(unitStrats);
