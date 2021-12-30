import { Divider, Typography } from "@mui/material"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import ShoppingListItem from "./ShoppingListItem"

const ListItem = ({ list }) => {
  const { id, title, image, price } = list
  const pathToImage = getImage(image)

  return (
    <div className="myCartPrice-logos">
      <div className="myCartPrice-title">
        <GatsbyImage image={pathToImage} alt="title" className="myCart-image" />
        <Typography variant="h4" color="primary" fontSize={18}>
          {title}
        </Typography>
      </div>
      <div className="myCartPrice-price1">
        {price.map((item, index) => {
          const { amount } = item
          if (!amount) return <div key={index}></div>
          else {
            return (
              <ShoppingListItem key={index} {...item} id={id} amount={amount} />
            )
          }
        })}
        <Divider variant="fullWidth" sx={{ width: "100%" }} />
      </div>
    </div>
  )
}

export default ListItem
