import React, { useEffect, useState } from 'react'
import { obtenerPokemonByUrl, obtenerPokemons } from '../service/pokemonService';
import Pokemon from './pokemon';

export default function Pokemons() {
    const [pokemons,setPokemons] = useState([]);
    const [pokemonId, setPokemonId] = useState([]);

    useEffect(() => {
        obtenerPokemonByUrl(pokemons.url).then((data) => {
            setPokemonId(data);
        })
    }, [])

    useEffect(() => {
        obtenerPokemons().then((data) => {
            // console.log(data);
            setPokemons(data);
        })
    },[])
    
  return (
    <div className='main'>
        {
            pokemons.map(pokemon => <Pokemon key={pokemonId.id} pokemon={pokemon}/>)
        }
    </div>  
  )
}
