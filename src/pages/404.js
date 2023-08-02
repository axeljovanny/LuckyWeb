import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import { IconNav } from "../components/nav";
import Footer from "../components/footer";
import { Idiomas } from "../components/idioma";

const pageStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <>
    <Layout>
      <IconNav/>
      <Idiomas/>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Pagína no encontrada</h1>
        <p style={paragraphStyles}>
          Lo sentimos mano 😔, la pagína a la que quieres entrar no existe, pero puedes ir a nuetro Inicio.
          <Link to="/">Visitar Inicio</Link>.
        </p>
      </main>
    </Layout>   
  </>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
