import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="j3scrum" />
    <Container>
      <ContainerMiddle>
        <h1>j3scrum</h1>
        <p>
          Com o j3scrum você consegue ter nas mãos muita transparência e clareza
          de todo o processo dos projetos das equipes com o melhor do
          desenvolvimento ágil e tudo em tempo real
        </p>
        <p>
          Tenha um desenvolvimento ágil em seu projeto e aonde você for!
          Aplicativo web e mobile, focado em gestão de projetos, equipes e etc.
          Trace metas e veja o desenvolvimento do projeto em tempo real a onde
          você for! j3scrum - Muito além de desenvolvimento ágil!
        </p>
        <p>
          Acesse:{" "}
          <OutboundLink href="http://j3scrum.com" target="_blank">
            www.j3scrum.com
          </OutboundLink>
        </p>
        <Button to="/">Voltar</Button>
      </ContainerMiddle>
    </Container>
  </Layout>
)

export default SecondPage

const Button = styled(Link)`
  border: solid 1px;
  border-color: #fff;
  border-radius: 40px;
  text-align: center;
  text-decoration: none !important;
  color: #fff;
  padding: 5px 10px;
  margin: 0 10px;
`

const Container = styled.div`
  overflow: hidden;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  display: flex;
  color: #fff;
`
const ContainerMiddle = styled.div`
  top: 30%;
  position: absolute;
  max-width: 960px;
`
