import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
  return (
    <Helmet
      title={`Pancake Plus Pasta || ${title}`}
      meta={[{ name: `description`, content: description }]}
    ></Helmet>
  )
}

export default SEO
