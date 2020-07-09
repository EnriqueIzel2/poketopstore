import { get } from "axios";

export function allPokemon(offset) {
  return get(
    ` https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  ).then((result) => result.data);
}

export function specficPokemon(name) {
  return get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
    (result) => result.data
  );
}
