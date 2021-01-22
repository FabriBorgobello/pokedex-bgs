import * as React from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonById } from "../../api/pokemonAPI";
import DetailCard from "../../components/DetailCard/DetailCard";
import { Poke } from "../../context/Poke";

const PokemonDetail = () => {
  const { id } = useParams();
  const [, setPoke] = React.useContext(Poke);

  React.useEffect(() => {
    fetchPokemonById(id).then(result => setPoke(result));
  }, [id, setPoke]);

  return (
    <>
      <DetailCard />
    </>
  );
};

export default PokemonDetail;
