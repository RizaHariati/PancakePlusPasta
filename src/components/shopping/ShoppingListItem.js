import { Typography } from "@mui/material"
import React from "react"
import { useGlobalContext } from "../../context/GlobalContextProvider"

const ShoppingListItem = ({ name, price, amount }) => {
  return (
    <div className="myCartPrice-price2">
      <Typography variant="body2" sx={{ width: "100px", alignText: "left" }}>
        Package:
      </Typography>
      <Typography variant="body2" sx={{ width: "100px" }}>
        {name.replace(/_/g, " ")}
      </Typography>
      {/* <div className="addToCart">
        <ButtonBase type="button" onClick={() => handleData(data, "decrease")}>
          <Remove fontSize="20px" />
        </ButtonBase>
        <input
          id="menu"
          name="menu"
          type="number"
          value={data}
          onChange={e => handleChange(e)}
          className="inputCart"
        />
        <ButtonBase type="button" onClick={() => handleData(data, "increase")}>
          <Add fontSize="20px" />
        </ButtonBase>
      </div> */}
      <Typography variant="body2" align="right" sx={{ width: "50px" }}>
        ${(price * amount) / 100}
      </Typography>
    </div>
  )
}

export default ShoppingListItem
