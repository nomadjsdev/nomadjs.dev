import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import Img from 'gatsby-image'

import { Layout } from '../components/Layout'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

export default ({ data, pageContext }) => {
  const { title, siteUrl } = useSiteMetadata()
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext
  // let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} - {title}
        </title>
        <link rel='canonical' href={`${siteUrl}/${frontmatter.slug}`} />
      </Helmet>
      <h1>{frontmatter.title}</h1>
      <p>First published: {frontmatter.date}</p>
      {frontmatter.updated && <p>Updated: {frontmatter.updated}</p>}
      {/* <Img fluid={featuredImgFluid} /> */}
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <React.Fragment>
          {previous && (
            <span>
              Previous:
              <Link to={previous.frontmatter.slug}>
                <p>{previous.frontmatter.title}</p>
              </Link>
            </span>
          )}
        </React.Fragment>
      )}
      {next === false ? null : (
        <React.Fragment>
          {next && (
            <span>
              Next:
              <Link to={next.frontmatter.slug}>
                <p>{next.frontmatter.title}</p>
              </Link>
            </span>
          )}
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        slug
        updated(formatString: "YYYY MMMM Do")
      }
    }
  }
`

// featuredImage {
//   childImageSharp {
//     fluid(maxWidth: 800) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
