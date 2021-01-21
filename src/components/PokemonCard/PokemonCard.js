import { getPokemonImg } from "../../api/pokemonAPI";
import styles from "./PokemonCard.module.scss";
const PokemonCard = ({ name, id }) => {
  return (
    <div className={styles.PokemonCard}>
      <div className={styles.Header}>{name}</div>
      <img className={styles.PokemonImage} src={getPokemonImg(id)} alt={name} />
    </div>
  );
};

export default PokemonCard;
