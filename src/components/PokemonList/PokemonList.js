import * as React from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard";
import { PokeList } from "../../context/PokeList";
import styles from "./PokemonList.module.scss";
import Pagination from "../Shared/Pagination";
import { fetchPokemons } from "../../api/pokemonAPI";

const PokemonList = () => {
  const [pokeList, setPokeList] = React.useContext(PokeList);
  const [offset, setOffset] = React.useState(0);
  const limit = 8;

  React.useEffect(() => {
    fetchPokemons(limit, offset).then(result => setPokeList(result));
  }, [offset, setPokeList]);

  return (
    <>
      <div className={styles.Container}>
        {pokeList.results &&
          pokeList.results.map(pokemon => {
            return (
              <Link key={pokemon.id} to={`pokemon/${pokemon.id}`} className={styles.Link}>
                <PokemonCard name={pokemon.name} id={pokemon.id} />
              </Link>
            );
          })}
      </div>
      <Pagination limit={limit} setOffset={setOffset} />
    </>
  );
};

export default PokemonList;
