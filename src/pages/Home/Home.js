import * as React from "react";
import PokemonList from "../../components/PokemonList/PokemonList";
import { fetchPokemons } from "../../api/pokemonAPI";
import { PokeList } from "../../context/PokeList";

const Home = () => {
  const [pokeList, setPokeList] = React.useContext(PokeList);

  React.useEffect(() => {
    fetchPokemons().then(result => setPokeList(result));
  }, [setPokeList]);

  return (
    <div>
      <h1>Home</h1>
      <PokemonList />
    </div>
  );
};

export default Home;
