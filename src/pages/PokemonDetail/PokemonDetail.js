import * as React from "react";
import { Redirect, useParams } from "react-router-dom";
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

  // Ir a Page404 si la ID introducida como parámetro no corresponde a un Pokemon disponible.
  if (!(Number(id) <= 493 && Number(id) >= 1)) {
    return <Redirect to="/Page404" />;
  }

  return (
    <div className={styles.Container}>
      <DetailCard />
    </div>
  );
};

export default PokemonDetail;
