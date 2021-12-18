import { Add, Remove } from "@mui/icons-material"
import { ButtonBase, Typography } from "@mui/material"
import React from "react"
import { useGlobalContext } from "../context/GlobalContextProvider"

const Item = ({ item }) => {
  const { name, price } = item
  return (
    <div className="itemPrice">
      <Typography variant="body2">
        {name.replace(/_/g, " ")} : ${price / 100}
      </Typography>
      <div className="addToCart">
        <ButtonBase>
          <Remove fontSize="20px" />
        </ButtonBase>

        <input type="number" min={0} placeholder="0" className="inputCart" />

        <ButtonBase>
          <Add fontSize="20px" />
        </ButtonBase>
      </div>
    </div>
  )
}

export default Item
