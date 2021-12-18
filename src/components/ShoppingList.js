import { Add, Cancel, Close, Remove } from "@mui/icons-material"
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Divider,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "../styles/styles.css"
import { boxContainer, modalBtn, shoppingPaper } from "../styles/styles"

const ShoppingList = ({ showList, setShowList }) => {
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
          <ListItem />
          <Divider variant="fullWidth" />
          <ListItem />
          <Divider variant="fullWidth" />
          <ListItem />
          <Divider variant="fullWidth" />
        </Paper>
        <Button variant="contained" color="primary" size="small">
          Check Out
        </Button>
      </Box>
    </Modal>
  )
}

export default ShoppingList

const ListItem = () => {
  return (
    <div className="myCartPrice-logos">
      <Avatar variant="square">
        <StaticImage src="../images/icons/icon-dark-192x192.png" alt="sample" />
      </Avatar>
      <div className="myCartPrice-price1">
        <Typography variant="body2">Burger or something</Typography>
        <div className="myCartPrice-price2">
          <div className="addToCart">
            <ButtonBase>
              <Remove fontSize="20px" />
            </ButtonBase>
            <input
              type="number"
              min={0}
              placeholder="0"
              className="inputCart"
            />
            <ButtonBase>
              <Add fontSize="20px" />
            </ButtonBase>
          </div>
          <Typography variant="body2">$56.33</Typography>
        </div>
      </div>
    </div>
  )
}
