import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";

import NoFavorites from "../../components/ui/NoFavorites";
import { FavoritesPokemos } from "../../components/pokemon";
import { localFavorites } from "../../utils";

const Favorites = () => {
  const [pokemonFavorites, setPokemonFavorites] = useState<number[]>([]);

  useEffect(() => {
    setPokemonFavorites(localFavorites.getPokemons());
  }, []);

  return (
    <Layout title="favorites">
      {pokemonFavorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemos pokemonFavorites={pokemonFavorites} />
      )}
    </Layout>
  );
};

export default Favorites;
