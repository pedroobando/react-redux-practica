import { Fragment } from "react";
import { useSelector } from "react-redux";

export const CantidadPokemon = () => {
  const { pokemon } = useSelector((state) => state.game_shop);
  return <Fragment>Cantidad:{pokemon}</Fragment>;
};
