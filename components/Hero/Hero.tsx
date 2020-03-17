import { Fragment } from "react"
import styled from "styled-components"

const HeroText = styled.h1`
  font-family: Roboto;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`

const BlueText = styled(HeroText)`
  display: inline-block;
  color: #1B93AD;
`

const Hero = () => {
  return (
    <Fragment>
      <HeroText>Hi, I'm Humza.</HeroText>
      <HeroText>Front End <BlueText>Developer</BlueText>.</HeroText>
    </Fragment>
  )
}

export default Hero