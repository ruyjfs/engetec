import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Religare" />
    <Container>
      <ContainerMiddle>
        <h1>Religare</h1>
        <p>
          Eis aqui o sentido mais profundo da minha relação contigo, porque não
          existe, entre tu e eu, nem eu, nem tu, existe nós!
        </p>
        <p>
          Já teve vontade de ajudar ou desabafar sem se expor? Conhecer os
          sentimentos? Ter um diário secreto pessoal? Receber frases e perguntas
          de reflexão diariamente? Já sonhou com algo e gostaria de refleti-lo e
          interpreta-lo? No Religare é possível tudo isso e muito mais… Vem
          fazer parte você também! Um app social que vai revolucionar o mundo e
          a sua vida!
        </p>
        <p>
          É GRÁTIS e LIVRE de propagandas, focado apenas em uma coisa, o amor.
        </p>
        <p>
          O Religare é um aplicativo social, para pessoas com depressão ou
          problemas pessoais, podendo também se auto-conhecer através das
          emoçoes e do diário secreto pessoal, além de se interagir com outras
          pessoas de forma anônima.
        </p>
        <p>
          Não fique de fora dessa, tenho certeza que você vai gostar, vem fazer
          parte também.
        </p>
        <p>
          Acesse:{" "}
          <OutboundLink
            href="https://religareapp.com"
            target="_blank"
          >
            www.religareapp.com
          </OutboundLink>
          .
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
