import { Add, Remove } from "@mui/icons-material"
import { ButtonBase, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContextProvider"

const Item = ({ name, price, id, setShowAlertMenu }) => {
  const { editList, shoppingList, loginStatus } = useGlobalContext()
  const [data, setData] = useState(0)

  useEffect(() => {
    const menu = shoppingList.find(item => item.id === id)
    if (menu) {
      const item = menu.price.find(item => item.name === name)
      setData(item.amount)
    } else setData(0)

    // eslint-disable-next-line
  }, [id])
  const handleData = (data, status) => {
    if (!loginStatus.login) setShowAlertMenu(true)
    else {
      if (status === "decrease") {
        if (data <= 0) {
          setData(0)
        } else {
          setData(data - 1)
        }
      } else if (status === "increase") {
        setData(data + 1)
      }
    }
    setTimeout(() => {
      setShowAlertMenu(false)
    }, 1000)
  }
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
    <div className="itemPrice">
      <Typography variant="body2">
        {name.replace(/_/g, " ")} : ${price / 100}
      </Typography>
      <div className="addToCart">
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
      </div>
    </div>
  )
}

export default Item
