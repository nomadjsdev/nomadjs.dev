import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/Layout'
import { Profile } from '../components/Profile'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const IndexWrapper = styled.main``

const PostWrapper = styled.div`
  margin-bottom: 2em;
`

const Title = styled.h1`
  margin-bottom: 0.5em;
`

const Updated = styled.span`
  font-size: 0.8em;
`

const Exceprt = styled.p`
  margin-top: 0.3em;
`

export default ({ data }) => {
  const { title, description, siteUrl, authorName } = useSiteMetadata()
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <link rel='canonical' href={siteUrl} />
        <meta name='description' content={description} />
      </Helmet>
      <Profile authorName={authorName} siteDescription={description} />
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter }) => (
          <PostWrapper key={id}>
            <Link to={frontmatter.slug}>
              <Title>{frontmatter.title}</Title>
            </Link>
            <span>{frontmatter.date}</span>
            {frontmatter.updated && (
              <Updated> (updated {frontmatter.updated})</Updated>
            )}
            <Exceprt>{excerpt}</Exceprt>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          slug
          updated(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`
