import * as React from "react";

export const PokeList = React.createContext();

export const PokeListProvider = ({ children }) => {
  const [pokeList, setPokeList] = React.useState([]);
  return <PokeList.Provider value={[pokeList, setPokeList]}>{children}</PokeList.Provider>;
};
