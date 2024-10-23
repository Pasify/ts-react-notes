import data from "./data";
import shuffle from "./shuffle";
export type CharacterType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};
export const fetchCharacter = (): Promise<CharacterType> => {
  const [character] = shuffle(data);
  return Promise.resolve(character);
};
