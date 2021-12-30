import { Typography } from "@mui/material"
import React from "react"
import { useGlobalContext } from "../../context/GlobalContextProvider"

const TotalPrice = () => {
  const { totalPrice } = useGlobalContext()
  const tax = (totalPrice + 125 + 345) / 1000
  const total = (totalPrice + 125 + 345) / 100 + tax
  return (
    <div className="myCartPrice-total">
      <div className="myCartPrice-subtotal">
        <Typography variant="body1" color="secondary.dark">
          Subtotal
        </Typography>
        <Typography variant="body1" color="secondary.dark">
          ${totalPrice / 100}
        </Typography>
      </div>
      <div className="myCartPrice-subtotal">
        <Typography variant="body1" color="secondary.dark">
          Delivery Fee
        </Typography>
        <Typography variant="body1" color="secondary.dark">
          $3.45
        </Typography>
      </div>
      <div className="myCartPrice-subtotal">
        <Typography variant="body1" color="secondary.dark">
          Packaging Fee
        </Typography>
        <Typography variant="body1" color="secondary.dark">
          $1.25
        </Typography>
      </div>
      <div className="myCartPrice-subtotal">
        <Typography variant="body1" color="secondary.dark">
          Tax 10%
        </Typography>
        <Typography variant="body1" color="secondary.dark">
          ${tax.toFixed(2)}
        </Typography>
      </div>
      <div className="myCartPrice-subtotal">
        <Typography variant="h4" color="textPrimary" fontSize={18}>
          Total
        </Typography>
        <Typography variant="h4" color="textPrimary" fontSize={18}>
          ${total.toFixed(2)}
        </Typography>
      </div>
    </div>
  )
}

export default TotalPrice
