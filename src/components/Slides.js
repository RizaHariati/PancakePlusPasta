import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/styles.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "@mui/material"

const query = graphql`
  query getSliders {
    allFile(
      filter: {
        relativeDirectory: { eq: "slider" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      nodes {
        childrenImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          id
        }
      }
    }
  }
`
const Slides = () => {
  const [index, setIndex] = useState(0)
  const result = useStaticQuery(query)
  const array = result.allFile.nodes
  useEffect(() => {
    if (index > array.length - 1) {
      setIndex(0)
    } else if (index < 0) {
      setIndex(array.length - 1)
    }
  }, [index])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex(prev => prev - 1)
  //   }, 3000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  return (
    <div className="slider">
      {array.map((item, indexArray) => {
        const { gatsbyImageData, id } = item.childrenImageSharp[0]
        const pathToImage = getImage(gatsbyImageData)
        let position = "before"
        if (indexArray === index) {
          position = "active"
        } else if (
          index + 1 === indexArray ||
          (indexArray === 0 && index === array.length - 1)
        ) {
          position = "after"
        }

        return (
          <div className={`slide ${position}`} key={id}>
            <GatsbyImage image={pathToImage} alt="transaction" />
          </div>
        )
      })}
    </div>
  )
}

export default Slides
