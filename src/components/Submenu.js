import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@mui/material"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { card, cardActions } from "../styles/styles"
import FindPrice from "../util/FindPrice"

import Item from "./Item"
const request = graphql`
  query getSubMenu {
    allContentfulPancakeMenu(filter: { type: { nin: "delivery" } }) {
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
            cup
            large
            regular
            sprite
          }
        }
        image {
          gatsbyImageData(
            aspectRatio: 1.5
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
          )
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
  const array = data.allContentfulPancakeMenu.nodes

  return (
    <div>
      <Typography variant="h3" color="secondary.dark">
        {type.replace(/-/g, " ")}
      </Typography>
      <Grid container spacing={2}>
        {array
          .filter(item => item.type === type)
          .map(menu => {
            const { description, price, id, title, image } = menu
            const pathToImage = getImage(image.gatsbyImageData)
            const itemPrice = FindPrice(price)

            return (
              <Grid item md={4} sm={6} xs={12} key={id} justifyItems="center">
                <Card sx={card}>
                  <CardActionArea>
                    <CardMedia sx={{ maxHeight: "180px" }}>
                      <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        objectPosition="top"
                      />
                    </CardMedia>
                  </CardActionArea>
                  <CardActions sx={cardActions}>
                    <Typography
                      variant="body1"
                      color="primary.dark"
                      align="center"
                    >
                      {title}
                    </Typography>
                    <div className="priceContainer">
                      {itemPrice.map((item, index) => {
                        return <Item key={index} item={item} />
                      })}
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
      </Grid>
    </div>
  )
}

export default Submenu
