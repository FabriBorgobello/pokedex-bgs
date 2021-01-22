import * as React from "react";
import PokemonList from "../../components/PokemonList/PokemonList";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Container}>
      <SearchBar />
      <PokemonList />
    </div>
  );
};

export default Home;
