import * as React from "react";
import { Search } from "../../context/Search";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [, setKeyWord] = React.useContext(Search);

  const submitHandler = e => {
    e.preventDefault();
    setKeyWord(e.target[0].value.trim());
  };

  return (
    <form onSubmit={e => submitHandler(e)} className={styles.Container}>
      <input aria-label="pokemon-search" className={styles.SearchBar} placeholder="Search Pokemon" />
      <button type="submit" className={styles.SearchButton}>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
