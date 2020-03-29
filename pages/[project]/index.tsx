import { useState, useEffect } from 'react'
import Head from "next/head"
import Link from 'next/link'
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
  padding-bottom: 2rem;
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
`

const ArticleText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 2rem;
`

const HomeLink = styled(ArticleText)`
  color: ${props => props.theme.blue};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
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
    <>
      <Head>
        <title>Humza Mujib | {pageData.name}</title>
        <meta name="description" content={`Humza Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some his work on "${pageData.name}"`} />
        <meta property="og:title" content={`Humza Mujib | ${pageData.name}`}/>
        <meta property="og:image" content={pageData.article["picture-one"]}/>
        <meta property="og:description" content={`Humza Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some his work on "${pageData.name}"`}/>
        <meta property="twitter:title" content={`Humza Mujib | ${pageData.name}`}/>
        <meta property="twitter:image" content={pageData.article["picture-one"]}/>
        <meta property="twitter:description" content={`Humza Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some his work on "${pageData.name}"`}/>
      </Head>
      <Container layout="homepage">
        <ProjectTitle>{pageData.name}</ProjectTitle>

        {
          Object.keys(pageData.article).map(element => {
            if(element.includes("picture")) {
              return <Picture key={element} src={pageData.article[element]}/>
            } else if(element.includes("title")) {
              return <ParagraphTitle key={element}>{pageData.article[element]}</ParagraphTitle>
            } else {
              return <ArticleText key={element}>{pageData.article[element]}</ArticleText>
            }
          })
        }
        <Link href="/" as="/">
          <HomeLink>Back to home</HomeLink>
        </Link>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  let query = ctx.query.project
  return {
    props: { query }
  }
}

export default Project