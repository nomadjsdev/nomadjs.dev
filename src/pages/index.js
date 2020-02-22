import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const IndexWrapper = styled.main``

const PostWrapper = styled.div``

export default ({ data }) => {
  const { title, description, siteUrl } = useSiteMetadata()
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <link rel='canonical' href={siteUrl} />
        <meta name='description' content={description} />
      </Helmet>
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter }) => (
          <PostWrapper key={id}>
            <Link to={frontmatter.slug}>
              <h1>{frontmatter.title}</h1>
            </Link>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
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
          date(formatString: "YYYY MMMM Do")
          slug
        }
      }
    }
  }
`
