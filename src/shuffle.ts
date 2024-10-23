import { CharacterType } from "./character";

export default function shuffle(data: CharacterType[]): CharacterType[] {
  const random = data[Math.floor(Math.random() * data.length - 1)];
  console.log(random);
  return [random];
}
