import { Typography } from "@mui/material"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const request = graphql`
  query getSubMenu($type: String) {
    allContentfulPancakeMenu(filter: { type: { eq: $type } }) {
      nodes {
        title
        type
        url
        price {
          price {
            _2_piece
            _3_piece
            _5_piece
            coca_cola
            fanta
            item
            large
            regular
            sprite
          }
        }
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
        }
        id
        description {
          description
        }
      }
    }
  }
`
const Submenu = ({ type }) => {
  const data = useStaticQuery(request)
  return (
    <div>
      <Typography variant="h3" color="secondary">
        {type}
      </Typography>
    </div>
  )
}

export default Submenu
