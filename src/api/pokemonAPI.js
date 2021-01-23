export const fetchAllPokemons = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=493&offset=0`);
    let list = await response.json();

    // Incluir ID en cada objeto para poder mostrar la imagen correspondiente.
    list.results.forEach(pokemon => {
      pokemon.id = getIdFromUrl(pokemon.url);
    });

    return list.results;
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