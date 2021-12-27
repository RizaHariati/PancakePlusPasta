import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/styles.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Typography } from "@mui/material"
import { deliveryTitle } from "../styles/styles"

const query = graphql`
  query delivery {
    allContentfulPancakeMenu(
      filter: { type: { eq: "delivery" } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        type
        description {
          description
        }
        image {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
            height: 700
            aspectRatio: 1.6
          )
        }
      }
    }
  }
`
const Slides = () => {
  const [index, setIndex] = useState(0)
  const result = useStaticQuery(query)
  const array = result.allContentfulPancakeMenu.nodes

  useEffect(() => {
    if (index > array.length - 1) {
      setIndex(0)
    } else if (index < 0) {
      setIndex(array.length - 1)
    }
    // eslint-disable-next-line
  }, [index])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1)
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="slider">
      {array.map((item, indexArray) => {
        const { description, image } = item
        const pathToImage = getImage(image.gatsbyImageData)

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
          <div className={`slide ${position}`} key={indexArray}>
            <Typography variant="h2" color="secondary.dark" sx={deliveryTitle}>
              {indexArray + 1} - {description.description}
            </Typography>
            <GatsbyImage
              image={pathToImage}
              alt="transaction"
              objectFit="cover"
              style={{ height: "100%" }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Slides
