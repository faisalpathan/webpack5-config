const pokemons = {
    electric: "pikachu",
    water: "squartle",
    fire: "charmander"
}

const ashPokemons = {
    ...pokemons,
    grass: "bulbasaur"
}

import { useState } from 'react'

const Pokemons = () => {
    const [currentPokemons, setPokemons] = useState({})

    const handleSetPokemons = (pokemonList) => () => {
        setPokemons(pokemonList)
    }

    return (
        <div>
            <h3>Current pokemon list</h3>
            <button onClick={handleSetPokemons(pokemons)}>Common pokemons</button>
            <button onClick={handleSetPokemons(ashPokemons)}>Ash's pokemons</button>

            <ul>
                {Object.keys(currentPokemons).map(currentPokemon => <li key={currentPokemon}>{currentPokemon}: {currentPokemons[currentPokemon]}</li>)}
            </ul>
        </div>
    )
}

export default Pokemons