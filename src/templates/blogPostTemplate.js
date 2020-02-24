import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

import spaces from '../styles/spaces'

const UpdatedDate = styled.span`
  font-size: 0.8em;
`

const Content = styled.div`
  margin: ${spaces.standardSpacing} 0;
`

const LinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: ${spaces.standardSpacing} 0;
`

export default ({ data, pageContext }) => {
  const { title, siteUrl } = useSiteMetadata()
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} - {title}
        </title>
        <link rel='canonical' href={`${siteUrl}/${frontmatter.slug}`} />
      </Helmet>
      <h1>{frontmatter.title}</h1>
      <p>
        {frontmatter.date}{' '}
        {frontmatter.updated && (
          <UpdatedDate>(Updated {frontmatter.updated})</UpdatedDate>
        )}
      </p>

      <Content>
        <MDXRenderer>{body}</MDXRenderer>
      </Content>
      <LinkContainer>
        {previous === false ? null : (
          <React.Fragment>
            {previous && (
              <span>
                <Link to={previous.frontmatter.slug}>
                  <p>&larr; {previous.frontmatter.title}</p>
                </Link>
              </span>
            )}
            {!previous && <span>&nbsp;</span>}
          </React.Fragment>
        )}
        {next === false ? null : (
          <React.Fragment>
            {next && (
              <span>
                <Link to={next.frontmatter.slug}>
                  <p>{next.frontmatter.title} &rarr;</p>
                </Link>
              </span>
            )}
            {!next && <span>&nbsp;</span>}
          </React.Fragment>
        )}
      </LinkContainer>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        slug
        updated(formatString: "YYYY/MM/DD")
      }
    }
  }
`
