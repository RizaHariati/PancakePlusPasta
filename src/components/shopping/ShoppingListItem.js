import { Add, Remove } from "@mui/icons-material"
import { ButtonBase, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import { useGlobalContext } from "../../context/GlobalContextProvider"

const ShoppingListItem = ({ name, price, amount, id }) => {
  const { editList } = useGlobalContext()
  const [data, setData] = useState(amount)
  const handleChange = e => {
    e.preventDefault()
    const number = parseInt(e.target.value)
    if (number > 0) {
      setData(number)
    } else {
      setData(0)
    }
  }
  useEffect(() => {
    editList(id, name, data, price)
    // eslint-disable-next-line
  }, [data])

  return (
    <div className="myCartPrice-price2">
      <Typography variant="body1" sx={{ width: "100px" }}>
        {name.replace(/_/g, " ")}
      </Typography>
      <div className="addToCart">
        <ButtonBase
          type="button"
          onClick={() => {
            if (data <= 0) {
              setData(0)
            } else {
              setData(data - 1)
            }
          }}
        >
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
        <ButtonBase type="button" onClick={() => setData(data + 1)}>
          <Add fontSize="20px" />
        </ButtonBase>
      </div>
      <Typography variant="body2" align="right" sx={{ width: "50px" }}>
        ${(price * amount) / 100}
      </Typography>
    </div>
  )
}

export default ShoppingListItem
