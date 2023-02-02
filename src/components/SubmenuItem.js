import { Add, Remove } from "@mui/icons-material"
import { ButtonBase, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContextProvider"

const SubmenuItem = ({ name, price, id }) => {
  const { editList, loginStatus, openAlert } = useGlobalContext()
  const [data, setData] = useState(0)

  const handleData = (data, status) => {
    if (!loginStatus?.login) return openAlert("error", "Please login first")
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
  }
  const handleChange = e => {
    e.preventDefault()
    const number = e.target.valueAsNumber
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
      <Typography
        variant="body2"
        sx={{
          textTransform: "capitalize",
          textAlign: "justify",
        }}
      >
        {name.replace(/_/g, " ")} : ${price / 100}
      </Typography>
      <div className="addToCart">
        <ButtonBase type="button" onClick={() => handleData(data, "decrease")}>
          <Remove fontSize="20px" />
        </ButtonBase>

        <input
          id="menu"
          name="menu"
          type="text"
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

export default SubmenuItem
