import PokemonImage from "../PokemonImage/PokemonImage";
import styles from "./PokemonCard.module.scss";
const PokemonCard = ({ name, id }) => {
  return (
    <div className={styles.PokemonCard} data-aos="zoom-in-up" data-aos-once="true">
      <div className={styles.Header}>
        <span>{name}</span>
      </div>
      <div className={styles.Content}>
        <span className={styles.Id}>#{id}</span>
        <PokemonImage id={id} name={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
