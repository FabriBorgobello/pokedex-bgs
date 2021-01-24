import * as React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Home.module.scss";
import BackToTop from "../../components/Shared/BackToTop";
import PokemonList from "../../components/PokemonList/PokemonList";

const Home = () => {
  return (
    <div className={styles.Container}>
      <h1>Hi! Welcome to this Pokedex created using React </h1>
      <SearchBar />
      <PokemonList />
      <BackToTop />
    </div>
  );
};

export default Home;
