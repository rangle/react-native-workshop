import { createSelector } from 'reselect';

const getPokemon = state => state.pokemon.get('all');
const getQuery = state => state.pokemon.get('query').toLowerCase();

export const filteredPokemon = createSelector(
  [ getPokemon, getQuery ],
  (pokemon, query) => {
    return pokemon.filter(p => p.get('name').toLowerCase().startsWith(query));
  }
);
