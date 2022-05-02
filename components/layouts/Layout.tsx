import Head from "next/head";
import { FC, PropsWithChildren, ReactNode } from "react";
import { NavBar } from "../ui";
interface Props {
  children: ReactNode;
  title?: string;
}

const location = typeof window !== "undefined" ? window.location.origin : "";

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon App"}</title>
        <meta name="author" content="Jonathan Hernandez" />
        <meta name="description" content={`information of pokemon ${title}`} />
        <meta name="keywords" content={`information about pokemon ${title}`} />
        <meta property={`og:${title}`} content={`information about ${title}`} />
        <meta
          property="og:description"
          content={`this is the full information about ${title}`}
        />
        <meta property="og:image" content={`${location}/image/banner.png`} />
      </Head>
      <NavBar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
