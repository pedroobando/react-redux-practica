// ---- Esto es una tienda de Video Juegos
const { createStore, combineReducers } = require("redux");

// -- Acciones que trabajos que desempe~nan cada trabajador
// ------------ ACTIONS
const BUY_POKEMON = "BUY_POKEMON";
const RETURN_POKEMON = "RETURN_POKEMON";
const BUY_YOSHI = "BUY_YOSHI";
const RETURN_YOSHI = "RETURN_YOSHI";

const BUY_SWITCH = "BUY_SWITCH";
const RETURN_SWITCH = "RETURN_SWITCH";

const buy_pokemon_action = (cantidad) => {
  return {
    type: BUY_POKEMON,
    payload: cantidad,
  };
};

const return_pokemon_action = (cantidad) => {
  return {
    type: RETURN_POKEMON,
    payload: cantidad,
  };
};

const buy_yoshi_action = (cantidad) => {
  return {
    type: BUY_YOSHI,
    payload: cantidad,
  };
};

const return_yoshi_action = (cantidad) => {
  return {
    type: RETURN_YOSHI,
    payload: cantidad,
  };
};

const buy_switch_action = (cantidad) => {
  return {
    type: BUY_SWITCH,
    payload: cantidad,
  };
};

const return_switch_action = (cantidad) => {
  return {
    type: RETURN_SWITCH,
    payload: cantidad,
  };
};

// -- Son los trabajadores
// ------------ REDUCERS
const default_games_state = {
  pokemon: 10,
  yoshi: 10,
};

const games_reducer = (state = default_games_state, { type, payload }) => {
  switch (type) {
    case BUY_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon - payload,
      };

    case RETURN_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon + payload,
      };

    case BUY_YOSHI:
      return {
        ...state,
        yoshi: state.yoshi - payload,
      };

    case RETURN_YOSHI:
      return {
        ...state,
        yoshi: state.yoshi + payload,
      };

    default:
      return state;
  }
};

const default_consoles_state = {
  ps5: 30,
  switch: 30,
};

const console_reducer = (state = default_consoles_state, { type, payload }) => {
  switch (type) {
    case BUY_SWITCH:
      return {
        ...state,
        switch: state.switch - payload,
      };

    case RETURN_SWITCH:
      return {
        ...state,
        switch: state.switch + payload,
      };

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  games_reducer,
  console_reducer,
});

// -- Almacen
// ------------ STORE
const store = createStore(rootReducers);
console.log("Estado inicial: ", store.getState());

store.subscribe(() => {
  console.log("Cambio de estado:", store.getState());
});

store.dispatch(buy_pokemon_action(3));
store.dispatch(return_pokemon_action(2));

store.dispatch(buy_yoshi_action(5));
store.dispatch(return_yoshi_action(2));

store.dispatch(buy_switch_action(20));
store.dispatch(return_switch_action(5));
