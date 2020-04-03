import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Politikos" />
    <Container>
      <ContainerMiddle>
        <h1>Politikos</h1>
        <p>
          Politikos é uma forma de todos poder dar e saber a opinão sobre os
          atuais políticos do país.
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
