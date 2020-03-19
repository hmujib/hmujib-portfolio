import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  height: 100%;
`

const ContentContainer = styled.div`
  width: auto;
  height: auto;
  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  padding: 3rem;

  @media(max-width: ${props => props.theme.mobile}) {
    padding: 1rem;
  }
`

const Footer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

const FooterText = styled.p`
  margin: 0;
  font-family: Roboto;
  font-size: .75rem;
  color: #ADADAD;
`

const FooterLink = styled.a`
  color: #ADADAD;
  text-decoration: none;

  &:hover {
    color: #1B93AD;
  }
`

const Container = (props) => {
  return (
    <Main>
      <ContentContainer>
        {props.children}
      </ContentContainer>
      <Footer>
        <FooterText>Humza Mujib</FooterText>
        <FooterText>
          <FooterLink target="_blank" href="https://www.linkedin.com/in/humza-mujib-b14361165/">LinkedIn</FooterLink>
          <span> | </span>
          <FooterLink target="_blank" href="https://github.com/hmujib">Github</FooterLink>
        </FooterText>
      </Footer>
    </Main>
  )
}

export default Container