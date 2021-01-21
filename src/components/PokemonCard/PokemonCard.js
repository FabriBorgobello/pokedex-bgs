import { getPokemonImg } from "../../api/pokemonAPI";
import PokemonImage from "../PokemonImage/PokemonImage";
import styles from "./PokemonCard.module.scss";
const PokemonCard = ({ name, id }) => {
  return (
    <div className={styles.PokemonCard}>
      <div className={styles.Header}>
        <span>{name}</span>
      </div>
      <div className={styles.Content}>
        <span className={styles.Id}>#{id}</span>
        <PokemonImage id={id} name={name} />
        {/* <img className={styles.PokemonImage} src={getPokemonImg(id)} alt={name} /> */}
      </div>
    </div>
  );
};

export default PokemonCard;
