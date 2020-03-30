import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

const SocialIconContainer = styled.div`
  width: auto;
  height: auto;
`

const SocialIconLink = styled.a`
  display: inline-block;
  position: relative;
  width: auto;
  height: 32px;
  margin: 1rem 1rem 1rem 0;
  color: black;
  font-family: Open Sans;
`

const SocialIcon = styled.img`
  width: auto;
  height: 32px;
  cursor: pointer;
`

const SocialIcons = () => {
  return (
    <SocialIconContainer>
      <SocialIconLink href='https://www.linkedin.com/in/humza-mujib-b14361165/' target='_blank'><SocialIcon src='/linkedin-icon.png' /></SocialIconLink>
      <SocialIconLink href='https://github.com/hmujib' target='_blank'><SocialIcon src='/github-icon.png' /></SocialIconLink>
      <SocialIconLink data-tip="Grab a resume!" href='/hmujib-resume.pdf' target='_blank'><ReactTooltip type="dark" effect="solid" place="bottom" /><SocialIcon src='/resume-icon.png' /></SocialIconLink>
    </SocialIconContainer>
  )
}

export default SocialIcons