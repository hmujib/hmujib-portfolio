import Container from "../components/Container"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`{
  html, body {
    margin: 0;
  }
}
`

const Index = () => {
  return (
    <Container>
      <GlobalStyle />
      {/* <h1 style={{margin: 0}}>Hi, I'm Humza.</h1> */}
    </Container>
  )
}

export default Index 