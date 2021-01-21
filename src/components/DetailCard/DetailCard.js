import * as React from "react";
import { Poke } from "../../context/Poke";
import styles from "./DetailCard.module.scss";

const DetailCard = () => {
  const [poke] = React.useContext(Poke);

  if (!poke.name) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.Container}>
      <h1>Hi</h1>
      <h2>{poke.name?.toUpperCase()}</h2>
    </div>
  );
};

export default DetailCard;
