export function get(url) {
  return fetch(url)
    .then((response) => response.json());
}

export function getAllPokemon() {
  const requestUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=811&offset=0';

  return get(requestUrl)
    .then((res) => {
      if (res.results) {
        return res.results;
      }

      throw new Error('Fetch failed');
    });
}

export function getPokemon(url) {
  return get(url);
}
