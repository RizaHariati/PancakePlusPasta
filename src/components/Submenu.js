import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@mui/material"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { card, cardActions } from "../styles/styles"
import { useGlobalContext } from "../context/GlobalContextProvider"
import Item from "./Item"

const Submenu = ({ type, setShowAlertMenu }) => {
  const { mainData } = useGlobalContext()

  if (!mainData) return <div></div>
  else {
    return (
      <div>
        <Typography variant="h3" color="secondary.dark">
          {type.replace(/-/g, " ")}
        </Typography>
        <Grid container spacing={2}>
          {mainData
            .filter(item => item.type === type)
            .map(menu => {
              const { price, id, title, image } = menu
              const pathToImage = getImage(image)

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
                        {price.map((item, index) => {
                          return (
                            <Item
                              key={index}
                              {...item}
                              id={id}
                              setShowAlertMenu={setShowAlertMenu}
                            />
                          )
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
}

export default Submenu
