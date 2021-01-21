import { getPokemonImg } from "../../api/pokemonAPI";
import pokeball from "../../images/grey-pokeball.png";
import styles from "./PokemonCard.module.scss";
const PokemonCard = ({ name, id }) => {
  return (
    <div className={styles.PokemonCard}>
      <div className={styles.Header}>{name}</div>
      <img className={styles.PokemonImage} src={getPokemonImg(id)} alt={name} />
      <img className={styles.BackgroundImage} src={pokeball} alt="background" />
    </div>
  );
};

export default PokemonCard;
