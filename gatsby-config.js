const siteMetadata = {
  title: `< nomadJSdev />`,
  description: `Code and photos from a backpacker.`,
  image: ``,
  siteUrl: `https://nomadjs.dev`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  githubUsername: `nomadjsdev`,
  instagramUsername: `nomadjsdev`,
  twitterUsername: `nomadjsdev`,
  authorName: `James Stone`
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}\\src\\posts`, name: `posts` }
    }
  ]
}
