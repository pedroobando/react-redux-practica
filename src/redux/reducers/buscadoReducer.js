import {
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from "../actions/buscadorAction";

const initialState = {
  loading: false,
  pokemon: [],
  error: "",
};

const buscador = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: payload,
        error: "",
      };

    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        pokemon: [],
        error: payload,
      };

    default:
      return state;
  }
};

export default buscador;
