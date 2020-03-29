import Head from "next/head"
import Container from "../components/Container"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import data from "../data/projects.json"

const Index = () => {
  return (
    <>
      <Head>
        <title>Humza Mujib | Portfolio</title>
        <meta name="description" content="Humza Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some of the projects he has worked on!" />
        <meta property="og:title" content="Humza Mujib | Portfolio"/>
        <meta property="og:image" content="/social-share.png"/>
        <meta property="og:description" content="Humza Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some of the projects he has worked on!"/>
        <meta property="twitter:title" content="Humza Mujib | Portfolio"/>
        <meta property="twitter:image" content="/social-share.png"/>
        <meta property="twitter:description" content="Humza Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some of the projects he has worked on!"/>
      </Head>
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
    </>
  )
}

export default Index 