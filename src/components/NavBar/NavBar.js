import { Link } from "react-router-dom";
import { ReactComponent as PokeBall } from "../../images/pokebola.svg";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="/" style={{ textDecoration: "none" }} className={styles.Brand}>
        <PokeBall className={styles.Logo} />
        <span className={styles.Title}>Pokedex</span>
      </Link>
    </nav>
  );
};

export default NavBar;
