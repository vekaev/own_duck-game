export const ANIMALS = {
  DUCK: {
    name: 'Duck',
    weight: 1,
    role: 'farm'
  },
  GOAT: {
    name: 'Goat',
    weight: 6,
    role: 'farm'
  },
  PIG: {
    name: 'Pig',
    weight: 12,
    role: 'farm'
  },
  HORSE: {
    name: 'Horse',
    weight: 36,
    role: 'farm'
  },
  COW: {
    name: 'Cow',
    weight: 72,
    role: 'farm'
  },
  FOX: {
    name: 'Fox',
    role: 'predator',
    eat: ['Duck', 'Goat'],
    ignoredBy: 'Puppy'
  },
  BEAR: {
    name: 'Bear',
    role: 'predator',
    eat: ['Pig', 'Horse', 'Cow'],
    ignoredBy: 'Dog'
  },
  PUPPY: {
    name: 'Puppy',
    role: 'defender',
    protectedFrom: 'Fox',
    cost: 6
  },
  DOG: {
    name: 'Dog',
    role: 'defender',
    protectedFrom: 'Bear',
    cost: 36
  }
}

export const FIRST_CUBE = [
  ...Array(7).fill(ANIMALS.DUCK),
  ...Array(2).fill(ANIMALS.GOAT),
  ANIMALS.HORSE,
  ANIMALS.PIG,
  ANIMALS.FOX,
];
export const SECOND_CUBE = [
  ...Array(7).fill(ANIMALS.DUCK),
  ...Array(2).fill(ANIMALS.GOAT),
  ANIMALS.COW,
  ANIMALS.PIG,
  ANIMALS.BEAR,
];