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
  // const { check, items, customer } = checkout
  const handleConfirm = async () => {
    setSuccessOrder(true)

    setTimeout(() => {
      confirmCheckout()
      navigate("/Welcome/")
    }, 1200)
  }
  if (!checkout?.items) return <div></div>
  else {
    return (
      <Modal open={checkout?.check}>
        <Box sx={boxContainer}>
          <ChildModal
            successOrder={successOrder}
            setSuccessOrder={setSuccessOrder}
          />

          <IconButton onClick={cancelCheckout} sx={modalBtn}>
            <Cancel color="error" />
          </IconButton>
          <Typography variant="h5" color="accentColor">
            Confirm Order
          </Typography>
          <Paper variant="outlined" sx={shoppingPaper}>
            <CostumerData customer={checkout?.customer} />
            <Divider variant="fullWidth" sx={{ width: "100%" }} />
            {checkout?.items.map(list => {
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
            <Typography variant="body1" color="accentColor">
              Thank you{" "}
            </Typography>
            <Typography variant="body1" color="accentColor">
              purchase was successful
            </Typography>
            <Typography variant="body1" color="accentColor">
              Bon Appétit
            </Typography>
            <Button
              color="secondary"
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
        <Typography variant="body1" color="accentColor">
          Deliver to
        </Typography>
      </div>
      {userData.name !== "guest" && (
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", paddingLeft: "40px" }}
        >
          {userData.name}
        </Typography>
      )}
      <Typography
        variant="body2"
        sx={{ textTransform: "capitalize", paddingLeft: "40px" }}
      >
        {street}
      </Typography>
      <Typography
        variant="body2"
        sx={{ textTransform: "capitalize", paddingLeft: "40px" }}
      >
        add: {number}
      </Typography>
      <Typography
        variant="body2"
        sx={{ textTransform: "capitalize", paddingLeft: "40px" }}
      >
        {location}
      </Typography>
      <div className="checkout-address-title ">
        <Phone fontSize="small" />
        <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
          {phoneDecrypt}
        </Typography>
      </div>
    </div>
  )
}
