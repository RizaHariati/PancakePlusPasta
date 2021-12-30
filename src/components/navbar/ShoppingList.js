import { Cancel } from "@mui/icons-material"
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material"
import React from "react"
import "../../styles/styles.css"
import { boxContainer, modalBtn, shoppingPaper } from "../../styles/styles"
import { useGlobalContext } from "../../context/GlobalContextProvider"
import TotalPrice from "../shopping/TotalPrice"
import ListItem from "../shopping/ListItem"

const ShoppingList = ({ showShoppingList, setShowShoppingList }) => {
  const { shoppingList, clearCart, loginStatus, confirming, user } =
    useGlobalContext()
  const handleClearCart = async () => {
    await clearCart()
    window.location.reload()
  }

  const handleCheckOut = async () => {
    await confirming(true, shoppingList, user)
    setShowShoppingList(false)
  }
  if (shoppingList.length === 0) {
    return (
      <Modal open={showShoppingList} sx={{ padding: { md: "20px", xs: "0" } }}>
        <Box sx={boxContainer}>
          <IconButton onClick={() => setShowShoppingList(false)} sx={modalBtn}>
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
            {!loginStatus.login && (
              <Typography
                variant="h3"
                color="secondary.dark"
                sx={{ fontVariant: "small-caps", fontSize: "28px" }}
              >
                Please Login
              </Typography>
            )}
          </Paper>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setShowShoppingList(false)}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    )
  } else {
    return (
      <Modal open={showShoppingList} sx={{ padding: { md: "20px", xs: "0" } }}>
        <Box sx={boxContainer}>
          <IconButton onClick={() => setShowShoppingList(false)} sx={modalBtn}>
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
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClearCart}
          >
            clear cart
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleCheckOut}
          >
            Check Out
          </Button>
        </Box>
      </Modal>
    )
  }
}

export default ShoppingList
