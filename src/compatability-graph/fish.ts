export type FishId =
  | "angel-fish"
  | "barbs"
  | "betta-female"
  | "betta-male"
  | "african-cichlids"
  | "south-american-cichlids-dwarf"
  | "south-american-cichlids-medium-large"
  | "bristlenose-catfish"
  | "corydoras-catfish"
  | "tandanus-and-eel-tailed-catfish"
  | "other-catfish"
  | "danios-whiteclouds-medakas"
  | "discus"
  | "eels"
  | "flying-fox"
  | "common-gold-fish"
  | "fancy-goldfish"
  | "dwarf-gouramis"
  | "large-gouramis"
  | "gudgeons"
  | "guppies"
  | "killfish"
  | "loaches-and-botia"
  | "mollies"
  | "murray-cod"
  | "oscars-and-other-large-cichlids"
  | "silver-and-golden-perch"
  | "plants"
  | "platys"
  | "rainbow-fish"
  | "rasbora"
  | "saratoga"
  | "silver-dollar"
  | "shrimp-yabbies-crabs"
  | "snails"
  | "swordtails"
  | "tetras";

export interface Fish {
  name: string;
  id: FishId;
}

// all fish constants 🐟
export const ANGEL_FISH: Fish = {
  name: "Angel Fish",
  id: "angel-fish",
};

export const Barbs: Fish = {
  name: "Barbs",
  id: "barbs",
};

export const BETTA_FEMALE: Fish = {
  name: "Betta (female)",
  id: "betta-female",
};

export const BETTA_MALE: Fish = {
  name: "Betta (male)",
  id: "betta-male",
};

export const AFRICAN_CICHLIDS: Fish = {
  name: "African Cichlids",
  id: "african-cichlids",
};

export const SOUTH_AMERICAN_CICHLIDS_DWARF: Fish = {
  name: "South American Cichlids (dwarf)",
  id: "south-american-cichlids-dwarf",
};

export const SOUTH_AMERICAN_CICHLIDS_MEDIUM_LARGE: Fish = {
  name: "South American Cichlids (medium-large)",
  id: "south-american-cichlids-medium-large",
};

export const BRISTLENOSE_CATFISH: Fish = {
  name: "Bristlenose Catfish",
  id: "bristlenose-catfish",
};

export const CORYDORAS_CATFISH: Fish = {
  name: "Corydoras Catfish",
  id: "corydoras-catfish",
};

export const TANDANUS_AND_EEL_TAILED_CATFISH: Fish = {
  name: "Tandanus and Eel Tailed Catfish",
  id: "tandanus-and-eel-tailed-catfish",
};

export const OTHER_CATFISH: Fish = {
  name: "Other Catfish",
  id: "other-catfish",
};

export const DANIOS_WHITECLOUDS_MEDAKAS: Fish = {
  name: "Danios/Whiteclouds/Medakas",
  id: "danios-whiteclouds-medakas",
};

export const DISCUS: Fish = {
  name: "Discus",
  id: "discus",
};

export const EELS: Fish = {
  name: "Eels",
  id: "eels",
};

export const FLYING_FOX: Fish = {
  name: "Flying Fox",
  id: "flying-fox",
};

export const COMMON_GOLD_FISH: Fish = {
  name: "Common Gold Fish",
  id: "common-gold-fish",
};

export const FANCY_GOLDFISH: Fish = {
  name: "Fancy Goldfish",
  id: "fancy-goldfish",
};

export const DWARF_GOURAMIS: Fish = {
  name: "Dwarf Gouramis",
  id: "dwarf-gouramis",
};

export const LARGE_GOURAMIS: Fish = {
  name: "Large Gouramis",
  id: "large-gouramis",
};

export const GUDGEONS: Fish = {
  name: "Gudgeons",
  id: "gudgeons",
};

export const GUPPIES: Fish = {
  name: "Guppies",
  id: "guppies",
};

export const KILLFISH: Fish = {
  name: "Killfish",
  id: "killfish",
};

export const LOACHES_AND_BOTIA: Fish = {
  name: "Loaches and Botia",
  id: "loaches-and-botia",
};

export const MOLLIES: Fish = {
  name: "Mollies",
  id: "mollies",
};

export const MURRAY_COD: Fish = {
  name: "Murray Cod",
  id: "murray-cod",
};

export const OSCARS_AND_OTHER_LARGE_CICHLIDS: Fish = {
  name: "Oscars and Other Large Cichlids",
  id: "oscars-and-other-large-cichlids",
};

export const SILVER_AND_GOLDEN_PERCH: Fish = {
  name: "Silver and Golden Perch",
  id: "silver-and-golden-perch",
};

export const PLANTS: Fish = {
  name: "Plants",
  id: "plants",
};

export const PLATYS: Fish = {
  name: "Platys",
  id: "platys",
};

export const RAINBOW_FISH: Fish = {
  name: "Rainbow Fish",
  id: "rainbow-fish",
};

export const RASBORA: Fish = {
  name: "Rasbora",
  id: "rasbora",
};

export const SARATOGA: Fish = {
  name: "Saratoga",
  id: "saratoga",
};

export const SILVER_DOLLAR: Fish = {
  name: "Silver Dollar",
  id: "silver-dollar",
};

export const SHRIMP_YABBIES_CRABS: Fish = {
  name: "Shrimp/Yabbies/Crabs",
  id: "shrimp-yabbies-crabs",
};

export const SNAILS: Fish = {
  name: "Snails",
  id: "snails",
};

export const SWORDTAILS: Fish = {
  name: "Swordtails",
  id: "swordtails",
};

export const TETRAS: Fish = {
  name: "Tetras",
  id: "tetras",
};

export const ALL_FISH: Fish[] = [
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
];

export const FISH_NAMES = ALL_FISH.reduce((soFar, curr) => ({
  ...soFar,
  [curr.id]: curr.name,
}));
