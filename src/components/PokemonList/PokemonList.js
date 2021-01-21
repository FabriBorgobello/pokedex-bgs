import * as React from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard";
import { PokeList } from "../../context/PokeList";

const PokemonList = () => {
  const [pokeList] = React.useContext(PokeList);

  return (
    <div className="container">
      {pokeList.results &&
        pokeList.results.map(pokemon => {
          return (
            <Link key={pokemon.id} to={`pokemon/${pokemon.id}`} style={{ textDecoration: "none" }}>
              <PokemonCard name={pokemon.name} id={pokemon.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default PokemonList;
