export function pokemonFactory() {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemonArt = async (entry) => {
        const response = await fetch(`${baseUrl}${entry}`, {mode: "cors"})
        const responseJson = await response.json()
        const artURL = responseJson["sprites"]["other"]["official-artwork"]["front_default"]
        return artURL
    } 
}