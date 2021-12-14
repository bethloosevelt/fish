import {
  ANGEL_FISH,
  BETTA_FEMALE,
  BETTA_MALE,
  AFRICAN_CICHLIDS,
  SOUTH_AMERICAN_CICHLIDS_DWARF,
  SOUTH_AMERICAN_CICHLIDS_MEDIUM_LARGE,
  BRISTLENOSE_CATFISH,
  CORYDORAS_CATFISH,
  TANDANUS_AND_EEL_TAILED_CATFISH,
  OTHER_CATFISH,
  DANIOS_WHITECLOUDS_MEDAKAS,
  DISCUS,
  EELS,
  FLYING_FOX,
  COMMON_GOLD_FISH,
  FANCY_GOLDFISH,
  DWARF_GOURAMIS,
  LARGE_GOURAMIS,
  GUDGEONS,
  GUPPIES,
  KILLFISH,
  LOACHES_AND_BOTIA,
  MOLLIES,
  MURRAY_COD,
  OSCARS_AND_OTHER_LARGE_CICHLIDS,
  SILVER_AND_GOLDEN_PERCH,
  PLANTS,
  PLATYS,
  RAINBOW_FISH,
  RASBORA,
  SARATOGA,
  SILVER_DOLLAR,
  SHRIMP_YABBIES_CRABS,
  SNAILS,
  SWORDTAILS,
  TETRAS,
  ALL_FISH,
  FishId,
} from "./fish";

export type FishCompatabilityData = {
  [key in FishId]: {
    compatibleFish: FishId[];
    semiCompatibleFish: FishId[];
  };
};
export const FISH_COMPATABILITY_DATA: FishCompatabilityData = {
  "angel-fish": {
    compatibleFish: ["angel-fish"],
    semiCompatibleFish: [],
  },
  barbs: {
    compatibleFish: ["angel-fish", "barbs"],
    semiCompatibleFish: [],
  },
  "betta-female": {
    compatibleFish: ["betta-female"],
    semiCompatibleFish: ["angel-fish", "barbs"],
  },
  "betta-male": {
    compatibleFish: ["betta-female"],
    semiCompatibleFish: ["angel-fish", "barbs"],
  },
  "african-cichlids": {
    compatibleFish: [],
    semiCompatibleFish: ["barbs", "african-cichlids"],
  },
  "south-american-cichlids-dwarf": {
    compatibleFish: ["angel-fish", "barbs", "betta-female", "betta-male"],
    semiCompatibleFish: ["african-cichlids", "south-american-cichlids-dwarf"],
  },
  "south-american-cichlids-medium-large": {
    compatibleFish: ["south-american-cichlids-medium-large"],
    semiCompatibleFish: [
      "angel-fish",
      "african-cichlids",
      "south-american-cichlids-dwarf",
    ],
  },
  "bristlenose-catfish": {
    compatibleFish: [
      "angel-fish",
      "barbs",
      "betta-female",
      "betta-female",
      "south-american-cichlids-dwarf",
    ],
    semiCompatibleFish: [
      "african-cichlids",
      "south-american-cichlids-medium-large",
      "bristlenose-catfish",
    ],
  },
  "corydoras-catfish": {
    compatibleFish: [
      "angel-fish",
      "barbs",
      "betta-female",
      "betta-male",
      "south-american-cichlids-dwarf",
      "bristlenose-catfish",
      "corydoras-catfish",
    ],
    semiCompatibleFish: ["south-american-cichlids-medium-large"],
  },
  "tandanus-and-eel-tailed-catfish": {
    compatibleFish: ["tandanus-and-eel-tailed-catfish"],
    semiCompatibleFish: ["angel-fish", "south-american-cichlids-medium-large"],
  },
  "other-catfish": {
    compatibleFish: [],
    semiCompatibleFish: [
      "angel-fish",
      "barbs",
      "betta-female",
      "betta-male",
      "african-cichlids",
      "south-american-cichlids-dwarf",
      "south-american-cichlids-medium-large",
      "bristlenose-catfish",
      "corydoras-catfish",
      "tandanus-and-eel-tailed-catfish",
      "other-catfish",
    ],
  },
  "danios-whiteclouds-medakas": {
    compatibleFish: [
      "angel-fish",
      "barbs",
      "betta-female",
      "betta-male",
      "bristlenose-catfish",
      "corydoras-catfish",
      "danios-whiteclouds-medakas",
    ],
    semiCompatibleFish: ["south-american-cichlids-dwarf", "other-catfish"],
  },
  discus: {
    compatibleFish: ["bristlenose-catfish", "corydoras-catfish", "discus"],
    semiCompatibleFish: [
      "angel-fish",
      "barbs",
      "south-american-cichlids-dwarf",
      "other-catfish",
      "danios-whiteclouds-medakas",
    ],
  },
  eels: {
    compatibleFish: ["bristlenose-catfish", "corydoras-catfish", "eels"],
    semiCompatibleFish: [
      "angel-fish",
      "barbs",
      "african-cichlids",
      "south-american-cichlids-dwarf",
      "south-american-cichlids-medium-large",
      "other-catfish",
      "danios-whiteclouds-medakas",
    ],
  },
  "flying-fox": {
    compatibleFish: [
      "angel-fish",
      "barbs",
      "south-american-cichlids-dwarf",
      "bristlenose-catfish",
      "corydoras-catfish",
      "eels",
      "flying-fox",
    ],
    semiCompatibleFish: [
      "betta-female",
      "betta-male",
      "south-american-cichlids-medium-large",
      "other-catfish",
      "danios-whiteclouds-medakas",
    ],
  },
  "common-gold-fish": {
    compatibleFish: ["common-gold-fish"],
    semiCompatibleFish: [
      "tandanus-and-eel-tailed-catfish",
      "danios-whiteclouds-medakas",
    ],
  },
  "fancy-goldfish": {
    compatibleFish: ["common-gold-fish", "fancy-goldfish"],
    semiCompatibleFish: [
      "tandanus-and-eel-tailed-catfish",
      "danios-whiteclouds-medakas",
    ],
  },
  "dwarf-gouramis": {
    compatibleFish: [
      "angel-fish",
      "barbs",
      "south-american-cichlids-dwarf",
      "bristlenose-catfish",
      "corydoras-catfish",
      "danios-whiteclouds-medakas",
      "flying-fox",
      "dwarf-gouramis",
    ],
    semiCompatibleFish: [
      "betta-female",
      "betta-male",
      "other-catfish",
      "discus",
      "eels",
    ],
  },
  "large-gouramis": {
    compatibleFish: [
      "angel-fish",
      "south-american-cichlids-dwarf",
      "bristlenose-catfish",
      "corydoras-catfish",
      "eels",
      "flying-fox",
      "large-gouramis",
    ],
    semiCompatibleFish: [
      "barbs",
      "betta-male",
      "african-cichlids",
      "south-american-cichlids-medium-large",
      "other-catfish",
      "danios-whiteclouds-medakas",
      "dwarf-gouramis",
    ],
  },
  gudgeons: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  guppies: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  killfish: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  "loaches-and-botia": {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  mollies: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  "murray-cod": {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  "oscars-and-other-large-cichlids": {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  "silver-and-golden-perch": {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  plants: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  platys: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  "rainbow-fish": {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  rasbora: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  saratoga: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  "silver-dollar": {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  "shrimp-yabbies-crabs": {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  snails: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  swordtails: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
  tetras: {
    compatibleFish: [],
    semiCompatibleFish: [],
  },
};
