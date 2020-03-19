import { Fragment } from "react"
import styled from "styled-components"

import SocialIcons from "../SocialIcons"

const HeroText = styled.h1`
  font-family: Roboto;
  font-size: 2em;
  font-weight: 700;
  margin: 0;
`

const BlueText = styled(HeroText)`
  display: inline-block;
  font-size: 1em;
  color: #1B93AD;
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