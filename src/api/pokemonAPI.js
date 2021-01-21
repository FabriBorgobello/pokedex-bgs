export const fetchPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}/`);
    const list = await response.json();
    list.results.forEach(pokemon => {
      pokemon.id = getIdFromUrl(pokemon.url);
    });
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

//  Get ID from URL.
export const getIdFromUrl = url => {
  const slicedUrl = url.slice(0, -1);
  const id = slicedUrl.substring(slicedUrl.lastIndexOf("/") + 1);
  return id;
};
