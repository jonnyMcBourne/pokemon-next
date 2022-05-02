import { pokeApi } from "../api";
import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import { PokemonListResponse, Pokemon} from "../interfaces";
import { Grid } from "@nextui-org/react";
import PokemonCard from "../components/pokemon/PokemonCard";

interface Props {
  pokemons: Pokemon[];
}
const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, image, name, url }) => (
          <PokemonCard id={id} image={image} name={name} url={url} key={id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

const getPokemonList = () => {
  return pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getPokemonList();
  const pokemons: Pokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        i + 1
      }.png`,
    };
  });
  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
