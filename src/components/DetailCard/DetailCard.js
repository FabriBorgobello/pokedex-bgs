import * as React from "react";
import { Poke } from "../../context/Poke";
import styles from "./DetailCard.module.scss";
const DetailCard = () => {
  const [poke] = React.useContext(Poke);
  return <h2>{poke.name?.toUpperCase()}</h2>;
};

export default DetailCard;
