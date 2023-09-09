import React, { useEffect, useState } from 'react'
import { obtenerPokemons } from '../service/pokemonService';
import Pokemon from './pokemon';


export default function Pokemons() {
    const [pokemons,setPokemons] = useState([]);

    useEffect(() => {
        obtenerPokemons().then((data) => {
            // console.log(data);
            setPokemons(data);
        })
    },[])
    
  return (
    <div className='main'>
        {
            pokemons.map(pokemon => <Pokemon key={pokemon.url} pokemon={pokemon}/>)
        }
    </div>  
  )
}
