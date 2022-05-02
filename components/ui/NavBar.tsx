import NextLink from 'next/link'
import { useTheme, Text,Spacer, Link } from "@nextui-org/react"
import Image from "next/image";

const NavBar = () => {
  const { theme, isDark } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        background: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pokemon"
        height={70}
        width={70}
      />
      <NextLink href="/"  passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href='/favorites' passHref >
        <Link css={{marginRight:'10px'}} >
        <Text color='white'> Favorites </Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default NavBar