import React, { useEffect, useState } from 'react'
import { obtenerPokemonByUrl, obtenerPokemons } from '../service/pokemonService';
import Pokemon from './pokemon';

export default function Pokemons() {
    const [pokemons,setPokemons] = useState([]);
    var id = 0;

    useEffect(() => {
        obtenerPokemons().then((data) => {
            // console.log(data);
            setPokemons(data);
            
        })
    },[])
    
  return (
    <div className='main'>
        {
            pokemons.map(pokemon => <Pokemon key={id++} pokemon={pokemon}/>)
        }
    </div>  
  )
}
