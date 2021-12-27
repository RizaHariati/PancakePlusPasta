import { Add, Cancel, Remove } from "@mui/icons-material"
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState, useEffect } from "react"

import "../styles/styles.css"
import { boxContainer, modalBtn, shoppingPaper } from "../styles/styles"
import { useGlobalContext } from "../context/GlobalContextProvider"

const ShoppingList = ({ showList, setShowList }) => {
  const { shoppingList } = useGlobalContext()

  if (shoppingList.length === 0) {
    return (
      <Modal open={showList} sx={{ padding: { md: "20px", xs: "0" } }}>
        <Box sx={boxContainer}>
          <IconButton onClick={() => setShowList(false)} sx={modalBtn}>
            <Cancel color="error" />
          </IconButton>
          <Typography variant="h4" color="primary.dark">
            My Cart
          </Typography>
          <Paper variant="outlined" sx={shoppingPaper}>
            <Typography
              variant="h3"
              color="secondary.dark"
              sx={{ fontVariant: "small-caps", fontSize: "28px" }}
            >
              You have no items in your cart yet
            </Typography>
          </Paper>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setShowList(false)}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    )
  } else {
    return (
      <Modal open={showList} sx={{ padding: { md: "20px", xs: "0" } }}>
        <Box sx={boxContainer}>
          <IconButton onClick={() => setShowList(false)} sx={modalBtn}>
            <Cancel color="error" />
          </IconButton>
          <Typography variant="h3" color="primary.dark">
            My Cart
          </Typography>
          <Paper variant="outlined" sx={shoppingPaper}>
            {shoppingList.map(list => {
              const { id } = list
              return <ListItem key={id} list={list} />
            })}
            <TotalPrice />
          </Paper>
          <Button variant="contained" color="primary" size="small">
            Check Out
          </Button>
        </Box>
      </Modal>
    )
  }
}

export default ShoppingList

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
