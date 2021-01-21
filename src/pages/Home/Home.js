import * as React from "react";
import PokemonList from "../../components/PokemonList/PokemonList";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.SearchBar}>Buscador</h1>
      <PokemonList />
    </div>
  );
};

export default Home;
