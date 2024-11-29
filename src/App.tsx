import { useEffect, useState } from "react";
import "./App.css";

import { CharacterInformation } from "./components/CharacterInfo";

import { CharacterType, fetchCharacter } from "./character";

function App() {
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetChar() {
      let char = await fetchCharacter();
      setCharacter(char);
      setIsLoading(false);
    }
    setTimeout(fetChar, 3000);
  }, []);
  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {character && <CharacterInformation character={character} />}
      {/* <main>hello</main> */}
    </main>
  );
}

export default App;
