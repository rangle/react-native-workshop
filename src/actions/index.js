import { GOTO_ROUTE, ROUTES } from '../constants';
import { getAllPokemon, getPokemon } from '../api';
import {
  CATCH_EM_ALL,
  ATTEMPTING_TO_CATCH_EM_ALL,
  CATCHING_EM_ALL_FAILED,
  I_CHOOSE_YOU,
  CHOOSING_FAILED,
  FILTER,
} from '../constants';

export function goToPokemonDetail({ title, url }) {
  return {
    type: GOTO_ROUTE,
    payload: ROUTES.POKEMON_DETAIL(title, url),
  };
}

export function gotoPokedex() {
  return {
    type: GOTO_ROUTE,
    payload: ROUTES.POKEDEX,
  };
}

export function onNavigate(payload) {
  return {
    type: GOTO_ROUTE,
    ...payload,
  };
}

export function catchEmAll() {
  return dispatch => {
    dispatch({ type: ATTEMPTING_TO_CATCH_EM_ALL });

    getAllPokemon()
      .then(pokemon => {
        dispatch({
          type: CATCH_EM_ALL,
          payload: pokemon,
        });
      })
      .catch((error) => dispatch({ type: CATCHING_EM_ALL_FAILED, error }));
  };
}

export function iChooseYou(url) {
  return dispatch =>
    getPokemon(url)
      .then(pokemon => {
        dispatch({
          type: I_CHOOSE_YOU,
          payload: pokemon,
        });
      })
      .catch((error) => dispatch({ type: CHOOSING_FAILED, error }));
}

export function unChoose() {
  return {
    type: I_CHOOSE_YOU,
    payload: {},
  };
}

export function filter(query) {
  return {
    type: FILTER,
    payload: query,
  };
}
