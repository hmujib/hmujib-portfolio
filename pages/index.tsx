import Container from "../components/Container"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"

const Index = () => {
  return (
    <Container>
      <Hero />
      <ProjectCard 
        projectTitle="Don Julio Rebuild"
        projectDetails="Client - 2020" 
        projectImage="/donjulio-preview.png" />
      <ProjectCard 
        projectTitle="Oban Whisky"
        projectDetails="Client - 2020" 
        projectImage="/oban-preview.png" />
    </Container>
  )
}

export default Index 