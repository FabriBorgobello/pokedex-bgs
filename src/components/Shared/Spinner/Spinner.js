import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div
      className={styles.SpinnerContainer}
      data-aos="zoom-in"
      test-id={"spinner"}
    >
      <div className={styles.Spinner}></div>
    </div>
  );
};

export default Spinner;
