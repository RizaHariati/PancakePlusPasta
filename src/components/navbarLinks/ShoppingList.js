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
  if (!shoppingList) return <div></div>
  if (shoppingList.length < 1) {
    return (
      <Modal open={showShoppingList} sx={{ padding: { md: "20px", xs: "0" } }}>
        <Box sx={boxContainer}>
          <IconButton onClick={() => setShowShoppingList(false)} sx={modalBtn}>
            <Cancel color="error" />
          </IconButton>
          <Typography variant="h5" color="accentColor">
            My Cart
          </Typography>
          <Paper variant="outlined" sx={shoppingPaper}>
            <Typography variant="body1" color="textColor">
              You have no items in your cart yet
            </Typography>
            {!loginStatus.login && (
              <Typography variant="body1">Please login first!</Typography>
            )}
          </Paper>
          <Button
            variant="contained"
            color="secondary"
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
          <Typography variant="h5" color="accentColor">
            My Cart
          </Typography>
          <Paper variant="outlined" sx={shoppingPaper}>
            {shoppingList?.length > 0 &&
              shoppingList.map(list => {
                const { id } = list
                return <ListItem key={id} list={list} />
              })}
            <TotalPrice />
          </Paper>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleClearCart}
          >
            clear cart
          </Button>
          <Button
            variant="contained"
            color="error"
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
