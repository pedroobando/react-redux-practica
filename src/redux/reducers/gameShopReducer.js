import { BUY_POKEMON, RETURN_POKEMON } from "../actions/gameShopAction";

const default_game_shop = {
  pokemon: 30,
};
const game_shop = (state = default_game_shop, { type, payload }) => {
  switch (type) {
    case BUY_POKEMON: {
      return {
        ...state,
        pokemon: state.pokemon - payload,
      };
    }
    case RETURN_POKEMON: {
      return {
        ...state,
        pokemon: state.pokemon + payload,
      };
    }

    default:
      return state;
  }
};

export default game_shop;
