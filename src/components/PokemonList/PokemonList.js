import * as React from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard";
import { PokeList } from "../../context/PokeList";
import { Poke } from "../../context/Poke";
import { Search } from "../../context/Search";
import styles from "./PokemonList.module.scss";
import { fetchAllPokemons } from "../../api/pokemonAPI";
import Spinner from "../Shared/Spinner/Spinner";

const PokemonList = () => {
  const [pokeList, setPokeList] = React.useContext(PokeList);
  const [, setPoke] = React.useContext(Poke);
  const [keyWord] = React.useContext(Search);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setPoke([]);
    fetchAllPokemons()
      .then(result => setPokeList(result))
      .then(() => {
        if (keyWord) {
          setPokeList(prevState =>
            prevState.filter(pokemon => pokemon.name.toLowerCase().includes(keyWord.toLowerCase()))
          );
        }
        setLoading(false);
      });
  }, [setPokeList, keyWord, setLoading, setPoke]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className={styles.Container}>
        {pokeList &&
          pokeList.map(pokemon => {
            return (
              <Link key={pokemon.id} to={`pokemon/${pokemon.id}`} className={styles.Link}>
                <PokemonCard name={pokemon.name} id={pokemon.id} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default PokemonList;
