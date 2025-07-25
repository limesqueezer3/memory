export function pokemonFactory() {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemon = (entry) => {
        
        fetch(`${baseUrl}${entry}`, {mode: "cors"})
            .then((response) => response.json())
            .then(((response) => (response["sprites"]["other"]["official-artwork"]["front_default"])))
    } 
}