export interface PokemonListResponse {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
  image:string
  id:number
}
