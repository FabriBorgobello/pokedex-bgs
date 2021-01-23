import * as React from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonById } from "../../api/pokemonAPI";
import DetailCard from "../../components/DetailCard/DetailCard";
import { Poke } from "../../context/Poke";
import styles from "./PokemonDetail.module.scss";

const PokemonDetail = () => {
  const { id } = useParams();
  const [, setPoke] = React.useContext(Poke);

  React.useEffect(() => {
    setPoke([]);
    fetchPokemonById(id).then(result => setPoke(result));
  }, [id, setPoke]);

  return (
    <div className={styles.Container}>
      <DetailCard />
    </div>
  );
};

export default PokemonDetail;
