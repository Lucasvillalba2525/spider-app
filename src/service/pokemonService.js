export async function obtenerPokemons(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    let data = await response.json();
    return data.results;
}
export async function obtenerPokemonByUrl(url){
    const response = await fetch(url);
    let data = await response.json();
    return data;
}

