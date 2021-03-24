export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

// ACTIONS
export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

export const fetchPokemonSuccess = (pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

export const fetchPokemonFailure = (error) => {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: error,
  };
};

const fetchPokemon = (valor) => {
  console.log(valor);
  return async (dispatch) => {
    try {
      dispatch(fetchPokemonRequest());
      const retval = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
      const body = await retval.json();
      dispatch(fetchPokemonSuccess([body]));
    } catch (error) {
      dispatch(fetchPokemonFailure("No se encontrol el Pokemon"));
    }
  };
};

export default fetchPokemon;
