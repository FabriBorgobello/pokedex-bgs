import * as React from "react";

export const Search = React.createContext();

export const SearchProvider = ({ children }) => {
  const [keyWord, setKeyWord] = React.useState("");

  return <Search.Provider value={[keyWord, setKeyWord]}>{children}</Search.Provider>;
};
