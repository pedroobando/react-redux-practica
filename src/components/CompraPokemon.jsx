import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  buy_pokemon_action,
  return_pokemon_action,
} from "../redux/actions/gameShopAction";

export const CompraPokemon = () => {
  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(buy_pokemon_action(1));
  };

  const handleReturn = () => {
    dispatch(return_pokemon_action(1));
  };

  return (
    <Fragment>
      <Button positive content="Comprar Pokemon" onClick={() => handleBuy()}></Button>
      <Button content="Regresar Pokemon" onClick={() => handleReturn()}></Button>
    </Fragment>
  );
};
