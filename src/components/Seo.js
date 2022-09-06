import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { Script } from "gatsby"
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
      <Script
        id="gtm-script-1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-VF6FQK4595`}
      />
      <Script id="gtm-script-2" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];`}
        {`function gtag(){dataLayer.push(arguments);}`}
        {`gtag('js', new Date());`}
        {`gtag('config','G-VF6FQK4595');`}
      </Script>
      <Helmet
        title={`${siteTitle} | ${title}`}
        meta={[
          { name: `description`, content: description || siteDescription },
          {
            name: `google-site-verification`,
            content: "ToQHHEWK48t95I0a2-VCdlbdgY7joocmPhmLPMS2KUw",
          },
          { name: `image`, content: siteImage },
          { name: `keywords`, content: process.env.GOOGLE_KEY },
        ]}
      ></Helmet>
    </>
  )
}

export default Seo
