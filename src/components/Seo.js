import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getTitle = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const findTitle = useStaticQuery(getTitle)
  const siteTitle = findTitle.site.siteMetadata.title

  return (
    <Helmet
      title={`${siteTitle} | ${title}`}
      meta={[{ name: `description`, content: description }]}
    ></Helmet>
  )
}

export default Seo
