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
  const resultTitle = useStaticQuery(getTitle)
  const { siteTitle } = resultTitle.site.siteMetadata
  return (
    <Helmet
      title={`${siteTitle} | ${title}`}
      meta={[{ name: `description`, content: description }]}
    ></Helmet>
  )
}

export default Seo
