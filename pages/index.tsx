import Container from "../components/Container"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import data from "../data/projects.json"

const Index = () => {
  return (
    <Container>
      <Hero />

      {data.map((project) => {
        return (
          <ProjectCard
            key={project.name}
            projectTitle={project.name}
            projectDetails={project.details}
            projectImage={project.previewImage} 
            slug={project.slug} />
        )
      })}

    </Container>
  )
}

export default Index 