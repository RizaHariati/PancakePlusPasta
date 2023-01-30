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
        <Typography variant="body2" color="secondary">
          Subtotal
        </Typography>
        <Typography variant="body2" color="secondary">
          ${totalPrice / 100}
        </Typography>
      </div>
      <div className="myCartPrice-subtotal">
        <Typography variant="body2" color="secondary">
          Delivery Fee
        </Typography>
        <Typography variant="body2" color="secondary">
          $3.45
        </Typography>
      </div>
      <div className="myCartPrice-subtotal">
        <Typography variant="body2" color="secondary">
          Packaging Fee
        </Typography>
        <Typography variant="body2" color="secondary">
          $1.25
        </Typography>
      </div>
      <div className="myCartPrice-subtotal">
        <Typography variant="body2" color="secondary">
          Tax 10%
        </Typography>
        <Typography variant="body2" color="secondary">
          ${tax.toFixed(2)}
        </Typography>
      </div>
      <div className="myCartPrice-subtotal">
        <Typography variant="body1" color="textPrimary" >
          Total
        </Typography>
        <Typography variant="body1" color="textPrimary" >
          ${total.toFixed(2)}
        </Typography>
      </div>
    </div>
  )
}

export default TotalPrice
