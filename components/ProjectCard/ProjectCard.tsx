import Link from "next/link"
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
  display: inline-block;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: -2px;
  cursor: pointer;
  color: black;
  &:hover {
    color: ${props => props.theme.blue};
    transition: .2s;
  }
`

const ProjectDetails = styled(StyledText)`
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;

  @media(max-width: ${props => props.theme.mobile}) {
    padding-top: 1rem;
  }
`

interface Props {
  projectTitle: string
  projectDetails: string
  projectImage: string
  slug: string
}

const ProjectCard = (props: Props) => {
  return (
    <ProjectContainer>
      <Panel>
        <Link href="/[project]" as={`/${props.slug}`}>
          <a><ProjectTitle>{props.projectTitle}</ProjectTitle></a>
        </Link>
        <ProjectDetails>{props.projectDetails}</ProjectDetails>
      </Panel>
      <Panel>
        <Link href="/[project]" as={`/${props.slug}`}>
          <a><ProjectImage src={props.projectImage} /></a>
        </Link>
      </Panel>
    </ProjectContainer>
  )
}

export default ProjectCard