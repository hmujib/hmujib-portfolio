import { useState, useEffect } from 'react'
import styled from 'styled-components'
import data from '../../data/projects.json'

import Container from "../../components/Container"
import { GetServerSideProps } from 'next'



const ProjectTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: -2px;
  padding-bottom: 1rem;
  text-align: center;
`

const ParagraphTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
`

const Picture = styled.img`
  width: 100%;
  height: 600px;
  border: 0;
  background-color: snow;
`

const ArticleText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
`

const Project = (props) => {
  let filteredData = data.find((project: any) => {
    if(project.slug === props.query) {
      return project
    }
  })

  const [pageData, updatePageData] = useState(filteredData)

  useEffect(() => {
    console.log(pageData)
  })

  return (
    <Container>
      <ProjectTitle>{pageData.name}</ProjectTitle>

      {
        Object.keys(pageData.article).map(element => {
          if(element.includes("picture")) {
            return <Picture key={element} />
          } else if(element.includes("title")) {
            return <ParagraphTitle key={element}>{pageData.article[element]}</ParagraphTitle>
          } else {
            return <ArticleText key={element}>{pageData.article[element]}</ArticleText>
          }
        })
      }

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