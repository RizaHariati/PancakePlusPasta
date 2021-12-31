import { Cancel, CheckCircle, LocationOn, Phone } from "@mui/icons-material"
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material"
import React, { useState } from "react"

import "../../styles/styles.css"
import {
  boxContainer,
  modalBtn,
  shoppingPaper,
  success,
} from "../../styles/styles"
import { useGlobalContext } from "../../context/GlobalContextProvider"
import { decryptItem } from "../../util/EncryptionHandler"
import TotalPrice from "../shopping/TotalPrice"
import { StaticImage } from "gatsby-plugin-image"
import ListItemShort from "../shopping/ListItemShort"
import { navigate } from "gatsby"

const ConfirmOrder = () => {
  const { checkout, cancelCheckout, confirmCheckout } = useGlobalContext()
  const [successOrder, setSuccessOrder] = useState(false)
  const { check, items, customer } = checkout
  const handleConfirm = async () => {
    setSuccessOrder(true)

    setTimeout(() => {
      confirmCheckout()
      navigate("/Welcome/")
    }, 1200)
  }
  if (!items) return <div></div>
  else {
    return (
      <Modal open={check} sx={{ padding: { md: "20px", xs: "0" } }}>
        <Box sx={boxContainer}>
          <ChildModal
            successOrder={successOrder}
            setSuccessOrder={setSuccessOrder}
          />

          <IconButton onClick={cancelCheckout} sx={modalBtn}>
            <Cancel color="error" />
          </IconButton>
          <Typography variant="h3" color="primary.dark">
            Confirm Order
          </Typography>
          <Paper variant="outlined" sx={shoppingPaper}>
            <CostumerData customer={customer} />
            <Divider variant="fullWidth" sx={{ width: "100%" }} />
            {items.map(list => {
              const { id } = list
              return <ListItemShort key={id} list={list} />
            })}
            <TotalPrice />
          </Paper>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={cancelCheckout}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            color="warning"
            size="small"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </Box>
      </Modal>
    )
  }
}

export default ConfirmOrder

const ChildModal = ({ successOrder, setSuccessOrder }) => {
  return (
    <div>
      <Modal open={successOrder}>
        <Paper sx={success} elevation={5}>
          <IconButton onClick={() => setSuccessOrder(false)} sx={modalBtn}>
            <Cancel color="error" />
          </IconButton>
          <div className="success-content">
            <CheckCircle fontSize="large" color="primary" />
            <Typography
              variant="h3"
              color="secondary.dark"
              sx={{ fontVariant: "small-caps", fontSize: "28px" }}
            >
              Thank you{" "}
            </Typography>
            <Typography
              variant="h3"
              color="secondary.dark"
              sx={{ fontVariant: "small-caps", fontSize: "22px" }}
            >
              purchase was successful
            </Typography>
            <Typography
              variant="h3"
              color="secondary.dark"
              sx={{ fontVariant: "small-caps", fontSize: "22px" }}
            >
              Bon Appétit
            </Typography>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => setSuccessOrder(false)}
            >
              close
            </Button>
          </div>
          <StaticImage
            src="../../images/main/detail.jpg"
            alt="success"
            className="success-order"
          />
        </Paper>
      </Modal>
    </div>
  )
}

const CostumerData = ({ customer }) => {
  const { userData, street, number, location, phone } = customer
  const phoneDecrypt = decryptItem(phone)
  return (
    <div>
      <div className="checkout-address-title ">
        <LocationOn fontSize="medium" />
        <Typography
          variant="h3"
          color="secondary.dark"
          sx={{ fontVariant: "small-caps", fontSize: "22px" }}
        >
          Deliver to
        </Typography>
      </div>
      {userData.name !== "guest" && (
        <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
          {userData.name}
        </Typography>
      )}
      <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
        {street}
      </Typography>
      <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
        add: {number}
      </Typography>
      <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
        {location}
      </Typography>
      <div className="checkout-address-title ">
        <Phone fontSize="small" />
        <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
          {phoneDecrypt}
        </Typography>
      </div>
    </div>
  )
}

// const ListItem = ({ list }) => {
//   const { id, title, price } = list

//   return (
//     <div className="myCartPrice-logos">
//       <div className="myCartPrice-title">
//         <Typography variant="h4" color="textPrimary" fontSize={18}>
//           {title}
//         </Typography>
//       </div>
//       <div className="checkout-price1">
//         {price.map((item, index) => {
//           const { amount } = item
//           if (!amount) return <div key={index}></div>
//           else {
//             return (
//               <ShoppingListItem key={index} {...item} id={id} amount={amount} />
//             )
//           }
//         })}
//         <Divider variant="fullWidth" sx={{ width: "100%" }} />
//       </div>
//     </div>
//   )
// }

// const ShoppingListItem = ({ name, price, amount, id }) => {
//   return (
//     <div className="myCartPrice-price2">
//       <Typography
//         variant="body1"
//         sx={{ width: "100px" }}
//         color="secondary.dark"
//       >
//         {name.replace(/_/g, " ")}
//       </Typography>
//       <Typography
//         variant="body1"
//         align="right"
//         sx={{ marginLeft: "auto" }}
//         color="secondary.dark"
//       >
//         x{amount}
//       </Typography>
//       <Typography
//         variant="body1"
//         align="right"
//         sx={{ width: "70px" }}
//         color="secondary.dark"
//       >
//         ${(price * amount) / 100}
//       </Typography>
//     </div>
//   )
// }
