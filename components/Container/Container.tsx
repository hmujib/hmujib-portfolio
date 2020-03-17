import styled from 'styled-components'

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`

const ContentContainer = styled.div`
  width: auto;
  height: auto;
  max-width: 1200px;
  min-height: 100vw;
  background-color: snow;
  margin: 0 auto;
  padding: 50px;
`

const Container = (props) => {
  return (
    <Main>
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </Main>
  )
}

export default Container