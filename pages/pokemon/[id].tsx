import { FC, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Button, Card, Grid, Text,Container, Image } from '@nextui-org/react'
import confetti from 'canvas-confetti';
import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { PokemonDetail } from "../../interfaces";
import { localFavorites } from '../../utils';

interface Props{
    pokemon:PokemonDetail
}
const PokemonPage:FC<Props> = ({pokemon}) => {

    const [isFavorite, setIsFavorite] = useState(localFavorites.isInFavorites(pokemon.id))
    const onToggleFavorite = () => {
      localFavorites.toggleFavorite(pokemon.id);
      setIsFavorite(!isFavorite);
      if (isFavorite) return;
   confetti({
     particleCount: 100,
     spread: 100,
     origin: { x:1, y:0 },
     angle:-100
   });
    };
   
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ margin: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1>{pokemon.name}</Text>
              <Button 
              color="gradient" 
              ghost = {isFavorite} 
              onClick={onToggleFavorite}>
                {isFavorite? 'remove of favorites':'add to favorites' }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pathsPokemons = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pathsPokemons.map((id) => ({ params: { id } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  try {
    const pokemonDetail = await pokeApi.get<PokemonDetail>(`/pokemon/${id}`);
    const { data } = pokemonDetail;
    if (!pokemonDetail) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    return {
      props: { pokemon: data },
    };
  } catch (error) {
    console.log("ERROR: " , error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};


export default PokemonPage;
