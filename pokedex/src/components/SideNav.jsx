import { useState } from 'react'
import { first151Pokemon, getFullPokedexNumber } from '../utils'
 
 export default function SideNav(props) {
  const { selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu } = props 

  const [ searchValue, setSearchValye ] = useState('')

  const filteredPakemon = first151Pokemon.filter((ele, eleIndex) => {
    if (getFullPokedexNumber(eleIndex).includes(searchValue)) { return true }

    if (ele.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) { return true }

    return false
  })

  return(
    <nav className={' ' + (!showSideMenu ? ' open' : '')}> 
      <div className={'header  ' + (!showSideMenu ? ' open' : '')}>
        <button onClick={handleCloseMenu} className='open-nav-button'>
           <i className ="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className='text-gradient'>Pokedex</h1>
        </div>
        <input placeholder='E.g. 001 or Bulda...' value={searchValue} onChange={(e) => {
          setSearchValye(e.target.value)
        }} />
      {filteredPakemon .map((pokemon, pokemonIndex) => {
        const truePokedexNumber = first151Pokemon.indexOf(pokemon)
        return (
        <button onClick={() => {
          setSelectedPokemon(truePokedexNumber)
          handleCloseMenu()
        }} key={pokemonIndex} className={'nav-card ' 
          + (pokemonIndex === selectedPokemon ? ' nav-card-selected' : ' ')}>
          <p>{getFullPokedexNumber(truePokedexNumber)}</p>
          <p>{pokemon}</p>
        </button>
        )
      })}
    </nav>
  )
 }