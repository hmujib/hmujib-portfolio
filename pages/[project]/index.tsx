import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import data from '../../data/projects.json'

import Container from '../../components/Container'
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
  height: auto;
  border: 0;
`

const ArticleText = styled.p`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 2rem;
`

const StyledLink = styled(ArticleText)`
  color: ${props => props.theme.blue};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`

const Anchor = styled.a`
  text-decoration: none;
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
        <meta name='description' content={`Humza Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some his work on '${pageData.name}'`} />
        <meta property='og:title' content={`Humza Mujib | ${pageData.name}`}/>
        <meta property='og:url' content={`https://hmujib.com/${pageData.slug}`}/>
        <meta property='og:image' content='https://hmujib.com/social-share.png'/>
        <meta property='og:description' content={`Humza Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some his work on '${pageData.name}'`}/>
        <meta property='og:type' content='website'/>
        <meta property='twitter:title' content={`Humza Mujib | ${pageData.name}`}/>
        <meta property='twitter:url' content={`https://hmujib.com/${pageData.slug}`}/>
        <meta property='twitter:image' content='https://hmujib.com/social-share.png'/>
        <meta property='twitter:description' content={`Humza Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some his work on '${pageData.name}'`}/>
        <meta property='twitter:type' content='website'/>
      </Head>
      <Container layout='homepage'>
        <ProjectTitle>{pageData.name}</ProjectTitle>

        {
          Object.keys(pageData.article).map(element => {
            if(element.includes('picture')) {
              return <Picture key={element} src={pageData.article[element]}/>
            } else if(element.includes('title')) {
              return <ParagraphTitle key={element}>{pageData.article[element]}</ParagraphTitle>
            } else {
              return <ArticleText key={element}>{pageData.article[element]}</ArticleText>
            }
          })
        }
        {
          pageData.github ? <><Anchor href="https://github.com/hmujib/hmujib-portfolio"><StyledLink>View on Github</StyledLink></Anchor> <ArticleText> | </ArticleText> <Link href="/" as="/"><StyledLink href="/">Home</StyledLink></Link></> : <Link href="/" as="/"><StyledLink href="/">Home</StyledLink></Link>
        }
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