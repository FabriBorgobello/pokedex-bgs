import * as React from "react";
import { Poke } from "../../context/Poke";
import styles from "./DetailCard.module.scss";
import PokemonImage from "../PokemonImage/PokemonImage";
import { Link } from "react-router-dom";
import TypeCard from "../TypeCard/TypeCard";
import Spinner from "../Shared/Spinner/Spinner";

const DetailCard = () => {
  const [poke] = React.useContext(Poke);

  if (!poke.name) {
    return (
      <div className={styles.SpinnerContainer}>
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Navigation}>
          <div>
            {poke.id > 1 && (
              <Link className={styles.Element} to={`/pokemon/${poke.id - 1}`}>
                <i className="fas fa-arrow-left" />#{poke.id - 1}
              </Link>
            )}
          </div>
          <div>
            {poke.id < 493 && (
              <Link className={styles.Element} to={`/pokemon/${poke.id + 1}`}>
                #{poke.id + 1} <i className="fas fa-arrow-right" />
              </Link>
            )}
          </div>
        </div>
        <div className={styles.Image} data-aos="fade-right" data-aos-once="true">
          <PokemonImage id={poke.id} name={poke.name} size={380} />
        </div>
        <div className={styles.Name} data-aos="zoom-in" data-aos-once="true">
          <span className={styles.Pokemon}>{poke.name}</span>
          <span className={styles.Id}>#{poke.id}</span>
        </div>
        <div className={styles.Height} data-aos="zoom-in" data-aos-once="true">
          <span className={styles.Subtitle}>Height</span>
          <span className={styles.CardContent}> {poke.height / 10}m</span>
        </div>
        <div className={styles.Type} data-aos="zoom-in" data-aos-once="true">
          <span className={styles.Subtitle}>Type</span>
          <div>
            {poke.types.map(type => {
              return <TypeCard className={styles.CardContent} key={type.type.name} type={type.type.name} />;
            })}
          </div>
        </div>
        <div className={styles.Weight} data-aos="zoom-in" data-aos-once="true">
          <span className={styles.Subtitle}>Weight</span>
          <span className={styles.CardContent}>{poke.weight / 10}kg</span>
        </div>
        <div className={styles.Abilities} data-aos="zoom-in" data-aos-once="true">
          <span className={styles.Subtitle}>Abilities</span>
          {poke.abilities.map(ability => {
            return (
              <span className={styles.CardContent} key={ability.ability.name}>
                {ability.ability.name}
              </span>
            );
          })}
        </div>
        <div className={styles.Bottom}>
          <Link to="/">
            <i className="fas fa-arrow-left"></i> <span> Back to Home </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
