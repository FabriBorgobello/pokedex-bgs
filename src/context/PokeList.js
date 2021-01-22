import * as React from "react";

export const PokeList = React.createContext();

export const PokeListProvider = ({ children }) => {
  const [pokeList, setPokeList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  return <PokeList.Provider value={[pokeList, setPokeList, loading, setLoading]}>{children}</PokeList.Provider>;
};
