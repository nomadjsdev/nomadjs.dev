import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Layout } from '../components/Layout'
import { Profile } from '../components/Profile'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const IndexWrapper = styled.main``

export default () => {
  const { title, description, siteUrl, authorName } = useSiteMetadata()
  return (
    <Layout>
      <Helmet>
        <title>Not found! - {title}</title>
        <link rel='canonical' href={`${siteUrl}/404`} />
        <meta name='description' content={description} />
      </Helmet>
      <Profile authorName={authorName} siteDescription={description} />
      <IndexWrapper>
        <h2>There's nothing here</h2>
        <p>Looks like you've followed a dead link - sorry about that.</p>
        <Link to='/'>Go back</Link>
      </IndexWrapper>
    </Layout>
  )
}
