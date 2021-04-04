import { FIRST_CUBE, SECOND_CUBE } from '../constants/animals';

export function createPath(string) {
    return "/" + string;
}

const rollDice = (max = 12) => {
    return Math.floor(Math.random() * max);
  };

export const rollAnimalDice = () => {
    return [FIRST_CUBE[rollDice()], SECOND_CUBE[rollDice()]];
};