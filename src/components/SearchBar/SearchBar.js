import * as React from "react";
import { Search } from "../../context/Search";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [keyWord, setKeyWord] = React.useContext(Search);

  const changeHandler = e => {
    e.preventDefault();
    setKeyWord(e.target.value);
  };

  return (
    <div className={styles.Container}>
      <input
        className={styles.SearchBar}
        placeholder="Buscar Pokémon"
        onChange={e => changeHandler(e)}
        value={keyWord}
      />
      <i className={`fas fa-search ${styles.SearchIcon}`}></i>
    </div>
  );
};

export default SearchBar;
