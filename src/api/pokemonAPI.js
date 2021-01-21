export const fetchPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}/`);
    const list = await response.json();
    return list;
  } catch (error) {
    return console.log(error);
  }
};
export const fetchPokemonById = async id => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const element = await response.json();
    return element;
  } catch (error) {
    return console.log(error);
  }
};

export const getPokemonImg = id => {
  return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${id}.png?raw=true`;
};
