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
import { card, cardActions } from "../../styles/styles"
import { useGlobalContext } from "../../context/GlobalContextProvider"
import SubmenuItem from "./SubmenuItem"

const Submenu = ({ type }) => {
  const { mainData, openModal, closeModal } = useGlobalContext()
  const handleClick = (description, image) => {
    if (!description) {
      return closeModal()
    } else {
      return openModal(description, image)
    }
  }
  if (!mainData) return <div></div>
  else {
    return (
      <div>
        <Typography
          variant="h5"
          color="secondary"
          sx={{ textTransform: "capitalize" }}
        >
          {type.replace(/-/g, " ")}
        </Typography>
        <Grid container spacing={2}>
          {mainData
            .filter(item => item.type === type)
            .map(menu => {
              const { price, id, title, image, description } = menu
              const pathToImage = getImage(image)

              return (
                <Grid item md={4} sm={6} xs={12} key={id} justifyItems="center">
                  <Card sx={card}>
                    <CardActionArea
                      onClick={() => handleClick(description, image)}
                    >
                      <CardMedia
                        sx={{
                          maxHeight: "180px",
                          width: "100%",
                          overflow: "hidden",
                          // maxWidth: "250px",
                        }}
                      >
                        <GatsbyImage
                          image={pathToImage}
                          alt={title}
                          objectPosition="top"
                          objectFit="fill"
                          style={{ width: "100%" }}
                        />
                      </CardMedia>
                    </CardActionArea>
                    <CardActions sx={cardActions}>
                      <Typography
                        variant="body1"
                        color="textColor"
                        align="center"
                        sx={{
                          textTransform: "capitalize",
                          letterSpacing: "1.2px",
                          fontWeight: "medium",
                        }}
                      >
                        {title}
                      </Typography>
                      <div className="priceContainer">
                        {price.map((item, index) => {
                          return <SubmenuItem key={index} {...item} id={id} />
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
