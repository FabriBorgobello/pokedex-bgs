import * as React from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonById } from "../../api/pokemonAPI";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    fetchPokemonById(id).then(result => setPokemon(result));
  }, [id]);
  return (
    <div>
      <h1>Pokemon Detail</h1>
      <h2>{pokemon.name.toUpperCase()}</h2>
    </div>
  );
};

export default PokemonDetail;
