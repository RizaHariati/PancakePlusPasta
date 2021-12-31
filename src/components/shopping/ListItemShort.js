import { Divider, Typography } from "@mui/material"
import React from "react"

import "../../styles/styles.css"

const ListItemShort = ({ list }) => {
  const { id, title, price } = list
  return (
    <div className="myCartPrice-logos">
      <div className="myCartPrice-title">
        <Typography variant="body1" color="textPrimary">
          {title}
        </Typography>
      </div>
      <div className="checkout-price1">
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

export default ListItemShort

const ShoppingListItem = ({ name, price, amount }) => {
  return (
    <div className="myCartPrice-price2">
      <Typography
        variant="body2"
        sx={{ width: "100px" }}
        color="secondary.dark"
      >
        {name.replace(/_/g, " ")}
      </Typography>
      <Typography
        variant="body2"
        align="right"
        sx={{ marginLeft: "auto" }}
        color="secondary.dark"
      >
        x{amount}
      </Typography>
      <Typography
        variant="body2"
        align="right"
        sx={{ width: "70px" }}
        color="secondary.dark"
      >
        ${(price * amount) / 100}
      </Typography>
    </div>
  )
}
