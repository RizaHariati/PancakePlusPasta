import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
const getTitle = graphql`
  {
    allImageSharp(
      filter: {
        original: {
          src: { eq: "/static/snippet-fef6159afb1b8ded8c0377448c5e41cb.png" }
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
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const result = useStaticQuery(getTitle)
  const { title: siteTitle, description: siteDescription } =
    result?.site?.siteMetadata
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
          { name: `image`, content: siteImage },
          { name: `keywords`, content: process.env.GOOGLE_KEY },
        ]}
      ></Helmet>
    </>
  )
}

export default Seo
