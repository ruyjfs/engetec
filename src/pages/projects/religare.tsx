import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <ContainerMiddle>
        <h1>Religare</h1>
        <p>
          O Religare é um aplicativo social para pessoas que gostariam de
          compartilhar problemas pessoais de forma anônima, tento também um
          diário secreto pessoal e um emocionometro, para ir acompanhando os
          próprios sentimentos e os próprios dias. Podendo assim enquanto ajuda
          outras pessoas ir também se auto-conhecendo e se auto-ajudando.
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
