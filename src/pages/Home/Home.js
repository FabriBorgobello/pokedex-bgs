import * as React from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../../api/pokemonAPI";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Home = () => {
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    fetchPokemons().then(result => setPokemons(result));
  }, []);

  //  Get ID from URL to request imgs.
  const getIdFromUrl = url => {
    const slicedUrl = url.slice(0, -1);
    const id = slicedUrl.substring(slicedUrl.lastIndexOf("/") + 1);
    return id;
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="container">
        {pokemons.results &&
          pokemons.results.map(pokemon => {
            const id = getIdFromUrl(pokemon.url);
            return (
              <Link key={id} to={`pokemon/${id}`}>
                <PokemonCard name={pokemon.name} id={id} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
