import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div  className={styles.SpinnerContainer}>
      <div className={styles.Spinner}></div>
    </div>
  );
};

export default Spinner;
