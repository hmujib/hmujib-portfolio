import { useState } from 'react'
import styled from 'styled-components'
import data from '../../data/projects.json'

import Container from "../../components/Container"
import { GetServerSideProps } from 'next'



const ProjectTitle = styled.h2`
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: -2px;
  text-align: center;
`

const Project = (props) => {
  let filteredData = data.find((project: any) => {
    if(project.slug === props.query) {
      return project
    }
  })

  const [pageData, updatePageData] = useState(filteredData)

  return (
    <Container>
      <ProjectTitle>{pageData.name}</ProjectTitle>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  let query = ctx.query.project
  return {
    props: { query }
  }
}

export default Project