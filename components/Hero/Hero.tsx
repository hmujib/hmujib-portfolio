import { Fragment } from "react"
import styled from "styled-components"

import SocialIcons from "../SocialIcons"

const HeroText = styled.h1`
  margin: 0;
  font-family: Roboto;
  font-size: 2em;
  font-weight: 700;
`

const BlueText = styled.span`
  color: ${props => props.theme.blue};
`

const HorizontalLine = styled.div`
  width: 50%;
  border-bottom: 1px solid black;+
`

const Hero = () => {
  return (
    <Fragment>
      <HeroText>Hi, I'm Humza.</HeroText>
      <HeroText>Front End <BlueText>Developer</BlueText>.</HeroText>
      <SocialIcons />
      <HorizontalLine />
    </Fragment>
  )
}

export default Hero