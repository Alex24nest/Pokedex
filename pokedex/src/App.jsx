import Header from "./components/Header.jsx"
import PokeCard from "./components/PokeCard.jsx"
import SideNav from "./components/SideNav.jsx"

import { useState } from "react" 

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  
  return (
    <>
      <Header />
      <SideNav  selectedPokemon={selectedPokemon} setSelectedPokemon=           {selectedPokemon} />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
