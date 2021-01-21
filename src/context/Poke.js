import * as React from "react";

export const Poke = React.createContext();

export const PokeProvider = ({ children }) => {
  const [poke, setPoke] = React.useState({});

  return <Poke.Provider value={[poke, setPoke]}>{children}</Poke.Provider>;
};
