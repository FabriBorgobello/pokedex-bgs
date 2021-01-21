export const fetchPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}/`);
    let list = await response.json();

    // Incluir ID en cada objeto para poder mostrar la imagen correspondiente.
    list.results.forEach(pokemon => {
      pokemon.id = getIdFromUrl(pokemon.url);
    });

    // Consultar solo hasta el Pokemon 493 ya que posterior a este índice no existen imgs.
    // comentar este bloque en caso de querer mostrar todos los resultados.
    const newResults = list.results.filter(pokemon => pokemon.id <= 493);
    list = { ...list, count: 493, results: newResults };

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

//  Obtener el ID de cada Pokemon a partir de su URL.
export const getIdFromUrl = url => {
  const slicedUrl = url.slice(0, -1);
  const id = Number(slicedUrl.substring(slicedUrl.lastIndexOf("/") + 1));
  return id;
};

// export const getPokemonImg = id => {
//   return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${id}.png?raw=true`;
// };
