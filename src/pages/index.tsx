import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Particles from "react-particles-js"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import logo from "../assets/logo.svg"

export default () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Container>
        <Particles
          style={{
            position: "absolute",
            height: "100vh",
            zIndex: 0,
            top: 0,
            left: 0,
          }}
          height="100vh"
          params={{
            particles: {
              shape: { type: "circle" },
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <ContainerMiddle>
          <Title className="App-logo-text">Ruyjfs</Title>
          {/* <Logo src={logo} className="App-logo" alt="logo" /> */}
          <Button to="/page-2/">Saber mais</Button>
          <Button to="/page-3">Go to page 3</Button>
          <Button to="/teste/page-1">aaa</Button>
        </ContainerMiddle>
        {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      </Container>
    </Layout>
  </>
)

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
`
const ContainerMiddle = styled.div`
  top: 30%;
  position: absolute;
`
const Logo = styled.img`
  /* 
   */
  /* top: 50%;
  position: absolute; */
`

const Title = styled.h1`
  /* top: 40%;
  position: absolute;
  left: 40%; */
  /* top: 50%;
  position: absolute; */
  color: #fff;
  text-align: center;
  /* font-size: 50px; */
  z-index: 100;
`
