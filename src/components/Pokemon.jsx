import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { obtenerPokemonByUrl } from '../service/pokemonService';

export default function Pokemon({ pokemon }) {
    const [pokemonId, setPokemonId] = useState([]);
    const [pokemonImg, setPokemonImg] = useState([]);

    useEffect(() => {
        obtenerPokemonByUrl(pokemon.url).then((data) => {
            setPokemonId(data);
            setPokemonImg(data.sprites);
        })
    }, [])
    return (
            <div className="row">
                <div className="col p-4 d-flex flex-column position-static">
                    
                    <h3 className="mb-0">{pokemonId.name}</h3>
                    <div className="mb-1 text-body-secondary">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>

                    <Link to={`/Detalle/${pokemonId.id}`} className="button">Mas Info</Link>
                </div>
                <div>
                    <img src={pokemonImg.front_default}
                         width="200" height="250"
                    ></img>
                </div>
            </div>
    )
}