import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
const getTitle = graphql`
  {
    allImageSharp(
      filter: {
        original: {
          src: { eq: "/static/snippet-c11a7adfcecfc53b5d03b903d3895c3b.png" }
        }
      }
    ) {
      nodes {
        gatsbyImageData
        original {
          src
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const result = useStaticQuery(getTitle)
  const {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
  } = result?.site?.siteMetadata
  const imageStatic = result?.allImageSharp
  const siteImage =
    imageStatic?.nodes[0]?.gatsbyImageData?.images?.fallback?.src

  return (
    <>
      <Helmet
        title={`${siteTitle || "Riza Hariati"} | ${title}`}
        meta={[
          { name: `description`, content: description || siteDescription },
          {
            name: `google-site-verification`,
            content: process.env.GOOGLE_INDEX,
          },
          { name: `image`, content: siteUrl + siteImage },
          { property: `og:image`, content: siteUrl + siteImage },
          { property: `og:url`, content: siteUrl },
        ]}
      ></Helmet>
    </>
  )
}

export default Seo
