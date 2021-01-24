import { Link, useLocation } from "react-router-dom";
import { ReactComponent as PokeBall } from "../../images/pokebola.svg";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const location = useLocation();

  function refreshPage() {
    if (location.pathname === "/pokedex") {
      window.location.reload();
    }
  }
  return (
    <nav className={styles.NavBar}>
      <Link
        to="/"
        onClick={refreshPage}
        style={{ textDecoration: "none" }}
        className={styles.Brand}
      >
        <PokeBall className={styles.Logo} />
        <span className={styles.Title}>Pokedex</span>
      </Link>
      <div className={styles.Social}>
        <a
          href="https://github.com/FabriBorgobello/pokedex-bgs"
          target="_blank"
          rel="noreferrer"
          className={styles.SocialLink}
          aria-label="github"
        >
          <i className="fab fa-github-square fa-lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/fabriborgobello/"
          target="_blank"
          rel="noreferrer"
          className={styles.SocialLink}
          aria-label="linkedin"
        >
          <i className="fab fa-linkedin fa-lg" />
        </a>

        <a
          href="mailto:fborgobello@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.SocialLink}
          aria-label="email"
        >
          <i className="fas fa-envelope-square fa-lg" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
