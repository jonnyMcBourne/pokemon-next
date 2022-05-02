import { Grid, Card } from "@nextui-org/react";
import { FC } from "react";
import CardFavoritePokemon from "./CardFavoritePokemon";
interface Props {
  pokemonFavorites: number[];
}
const FavoritesPokemons: FC<Props> = ({ pokemonFavorites }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonFavorites.map((id) => (
        <CardFavoritePokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritesPokemons;
