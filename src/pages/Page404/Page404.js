import { Link } from "react-router-dom";
import styles from "./Page404.module.scss";

const Page404 = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Header}>Oops!</h1>
      <p className={styles.Text}>We can't seem to find the page you're looking for.</p>
      <Link to="/" className={styles.Link}>
        <i className="fas fa-arrow-left"></i> <span> Back to Home </span>
      </Link>
    </div>
  );
};

export default Page404;
