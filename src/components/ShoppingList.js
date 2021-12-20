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
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
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
          <Typography variant="h3" color="primary.dark">
            My Cart
          </Typography>
          <Paper variant="outlined" sx={shoppingPaper}>
            <Typography variant="h3" color="secondary.dark">
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
  const { title, nameItem, image, price } = list
  const pathToImage = getImage(image)
  return (
    <div className="myCartPrice-logos">
      <GatsbyImage image={pathToImage} alt="title" className="myCart-image" />

      <div className="myCartPrice-price1">
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
        {price.map((item, index) => {
          const { name, price, amount } = item
          if (!amount) <div></div>
          else {
            return (
              <div key={index} className="myCartPrice-price2">
                <Typography variant="body1">
                  {name.replace(/_/g, " ")}
                </Typography>
                <div className="addToCart">
                  <ButtonBase>
                    <Remove fontSize="20px" />
                  </ButtonBase>
                  <input
                    type="number"
                    value={amount}
                    placeholder="0"
                    className="inputCart"
                  />
                  <ButtonBase>
                    <Add fontSize="20px" />
                  </ButtonBase>
                </div>
                <Typography variant="body2">
                  ${(price * amount) / 100}
                </Typography>
              </div>
            )
          }
        })}
      </div>
      <Divider variant="fullWidth" />
    </div>
  )
}
