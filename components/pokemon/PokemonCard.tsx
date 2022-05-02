import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { Pokemon } from "../../interfaces";


export const PokemonCard:FC<Pokemon> = ({ id, image, name}) => {
  const router =useRouter()
  const onClickPokemon = () =>{
    router.push(`/pokemon/${id}`)
    }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onClickPokemon} >
      <Card hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text> #{id } </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}

export default PokemonCard