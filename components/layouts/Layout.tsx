import Head from "next/head"
import { FC, PropsWithChildren, ReactNode } from "react"
import NavBar from "../NavBar"
interface Props{
  children: ReactNode
  title?:string
}

export const Layout:FC<PropsWithChildren<Props>> = ({children, title }) => {
  return (
    <>
    <Head>
        <title> {title || 'Pokemon App'}</title>
        <meta name="author" content="Jonathan Hernandez" />
        <meta name="description" content={`information of pokemon ${title}`} />
        <meta name="keywords" content={`information about pokemon ${title}`} />
    </Head>
    <NavBar/>
    <main style={{
      padding:'0px 20px' }} >
        {children}
    </main>
    </>
  )
}

export default Layout