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
          Com o avanço da tecnologia, vivemos momentos bons, porém momentos difíceis também. As pessoas estão cada vez mais estressadas, esgotadas e sem recursos.  No meio digital, pensamos em família perfeita, corpo perfeito, cabelo perfeito, rosto perfeito, festas perfeitas e momentos perfeitos. Mas sabemos que na realidade não é bem assim, todos nós temos problemas pessoais, e muitos deles temos receio em expor, no fundo temos algumas magoas, rancores e/ou medo, seja do passado ou futuro, as vezes o nosso muito excesso é por falta de algo, que só nós mesmos sabemos ou muitas vezes nem sabemos… 
        </p>
        <p>
          A depressão é a segunda maior causa de morte no mundo, à cada 40 segundos morre uma pessoa no mundo por suicídio.
          A depressão é a causa número 1 de incapacidade em todo o mundo! 
          70% das pessoas não tem uma saúde mental razoável, fora o aumento de agressão doméstica que vem aumentando, as vezes de forma física outras de forma verbal, sem contar as crianças que crescem em meio a tudo isso, refletindo durante toda a vida dela, até mesmo adulta.
          Temos que esperar para agir?
        </p>
        <p>
          Muitas vezes ajudando o próximo também nos ajudamos. Então no meio de tanta tecnologia, eis que surge o Religare, um app para podermos expor nossos problemas sem nos expor, receber carinho do mundo inteiro, nos auto-conhecer através do diário pessoal, diário e interpretação dos sonhos, diário de sentimentos, apontando os sentimentos, motivos das causas e como muda-las. O medo nos aprisiona, a mente não é nossa inimiga, ela causa os nossos sentimentos e podemos usar isso ao nosso favor, e para isso precisamos conhecer esses nossos sentimentos ou melhor podemos entender os momentos de outras pessoas, os sentimentos delas e usar o sentimento delas à favor delas.  Estamos começando, que tal você vir também fazer parte de disso? Que tal começarmos agora? 💌 📓💕🗝
        </p>
        <p>
          É GRÁTIS e LIVRE de propagandas, focado apenas em uma coisa, o amor.
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
  /* position: absolute; */
  max-width: 960px;
`
