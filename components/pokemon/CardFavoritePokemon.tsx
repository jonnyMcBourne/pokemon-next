import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
interface Props{
    id:number
}
const CardFavoritePokemon:FC<Props> = ({id}) => {

    const router = useRouter()
    const onClickToPokemon=():void=>{
        router.push(`/pokemon/${id}`)
    }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onClickToPokemon}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </Card>
    </Grid>
  );
}

export default CardFavoritePokemon