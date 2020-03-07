import { createStore } from "redux";

const initialState = {
  pokemons: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_POKEMON":
      return {
        pokemons: [...state.pokemons, action.payload]
      };

    case "DELETE_POKEMON":
      return {
        pokemons: state.pokemons.filter(
          pokemon => pokemon.name !== action.payload
        )
      };

    default:
      return state;
  }
}

export const Store = createStore(reducer);
