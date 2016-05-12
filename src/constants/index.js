export const CATCH_EM_ALL = '@@api/CATCH_EM_ALL';
export const ATTEMPTING_TO_CATCH_EM_ALL = '@@api/ATTEMPTING_TO_CATCH_EM_ALL';
export const CATCHING_EM_ALL_FAILED = '@@api/CATCHING_EM_ALL_FAILED';
export const I_CHOOSE_YOU = '@@user/I_CHOOSE_YOU';
export const CHOOSING_FAILED = '@@api/CHOOSING_FAILED';
export const FILTER = '@@user/FILTER';

export const GOTO_ROUTE = '@@navigator/GOTO_ROUTE';
export const ROUTE_IDS = {
  MAIN_NAVIGATOR: 'MAIN_NAVIGATOR',
  POKEDEX: 'POKEDEX',
  POKEMON_DETAIL: 'POKEMON_DETAIL',
};

export const ROUTES = {
  POKEDEX: {
    key: ROUTE_IDS.MAIN_NAVIGATOR,
    index: 0,
    children: [{ key: ROUTE_IDS.POKEDEX, title: 'Pokedex' }],
  },
  POKEMON_DETAIL: (title, url) => ({
    key: ROUTE_IDS.POKEMON_DETAIL,
    index: 1,
    title,
    url,
  }),
};
