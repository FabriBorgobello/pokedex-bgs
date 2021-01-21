import * as React from "react";

export const PokemonContext = React.createContext();

export const PokemonContextProvider = ({ children }) => {
  const [pokemon, setPokemon] = React.useState({});
  return <PokemonContext.Provider value={[pokemon, setPokemon]}>{children}</PokemonContext.Provider>;
};
