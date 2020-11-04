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
        <h1>Planus</h1>
        <p>
        ⏱ Pomodoro Timer ✅ Lista de tarefas 📊 Gerenciador de tempo 📅 Agenda 🔔 Lembretes
        </p>
        <p>
        Planus combina um contador pomodoro com um gerenciador de tarefas, é um aplicativo baseado em ciência que irá motivá-lo a manter o foco e cumprir suas tarefas.
        </p>
        <p>
          Junte a técnica pomodoro e listas de tarefas em um só lugar. Você pode adicionar e organizar suas tarefas em listas, iniciar o contador e focar no trabalho e no estudo. Além disso, você também pode definir lembretes, prioridades e adicionar notas. Ao final, você poderá verificar o tempo gasto em cada tarefa e em cada projeto.
        </p>
        <p>
          O Planus te ajuda a se concentrar nas tarefas e acompanhar suas horas de trabalho e de estudo.
        </p>
        <p>
          Acesse:{" "}
          <OutboundLink
            href="https://planus.app"
            target="_blank"
          >
            www.planus.app
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
