import styled from "styled-components"

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5rem 0;

  @media(max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
  }
`

const Panel = styled.div`
  width: 50%;
  height: 100%;

  @media(max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }
`

const StyledText = styled.h2`
  margin: 0;
  font-family: 'Open Sans', sans-serif;
`

const ProjectTitle = styled(StyledText)`
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: -2px;
`

const ProjectDetails = styled(StyledText)`
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;

  @media(max-width: ${props => props.theme.mobile}) {
    padding-top: 1rem;
  }
`

interface Props {
  projectTitle: string
  projectDetails: string
  projectImage: string
}

const ProjectCard = (props: Props) => {
  return (
    <ProjectContainer>
      <Panel>
        <ProjectTitle>{props.projectTitle}</ProjectTitle>
        <ProjectDetails>{props.projectDetails}</ProjectDetails>
      </Panel>
      <Panel>
        <ProjectImage src={props.projectImage} />
      </Panel>
    </ProjectContainer>
  )
}

export default ProjectCard