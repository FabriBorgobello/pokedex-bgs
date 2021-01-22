import * as React from "react";
import { Search } from "../../context/Search";

const SearchBar = () => {
  const [keyWord, setKeyWord] = React.useContext(Search);

  const changeHandler = e => {
    e.preventDefault();
    setKeyWord(e.target.value);
  };

  return <input placeholder="Buscar Pokémon" onChange={e => changeHandler(e)} value={keyWord} />;
};

export default SearchBar;
