import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import Layout from "../components/layout"
import { useGlobalContext } from "../context/GlobalContextProvider"
import {
  container,
  paper,
  lineBtn,
  modalBtn,
  boxContainer,
} from "../styles/messageStyles"
import "../styles/styles.css"
import moment from "moment"
import { Cancel } from "@mui/icons-material"
import ListItemShort from "../components/shopping/ListItemShort"
import SEO from "../components/SEO"

const Message = () => {
  const { messageList } = useGlobalContext()
  const [showMessageModal, setShowMessageModal] = useState({
    status: false,
    message: "",
  })
  const handleClick = (status, message) => {
    setShowMessageModal({ status, message })
  }
  if (!messageList) return <div></div>
  else {
    return (
      <Layout>
        <SEO title="Message" description="Message for our member" />
        <Container maxWidth="sm" sx={container}>
          <Paper variant="outlined" sx={paper}>
            {showMessageModal.status && (
              <MessageModal
                showMessageModal={showMessageModal}
                setShowMessageModal={setShowMessageModal}
              />
            )}
            <Typography variant="h4" color="primary.dark">
              My Orders
            </Typography>
            <Divider variant="fullWidth" />
            <div className="message-subtitle">
              <Typography variant="button" align="left" sx={{ width: "70%" }}>
                Order time :
              </Typography>
              <Typography variant="button" align="right" sx={{ width: "30%" }}>
                status
              </Typography>
            </div>
            <Divider variant="fullWidth" />
            {messageList.map(message => {
              const { id, date } = message
              const orderTime = moment(date).format(
                "dddd, MMMM Do YYYY, h:mm:ss a"
              )
              return (
                <div key={id}>
                  <Button
                    variant="text"
                    color="inherit"
                    sx={lineBtn}
                    onClick={() => handleClick(true, message)}
                  >
                    <Typography
                      variant="body2"
                      align="left"
                      sx={{ width: "70%" }}
                    >
                      {orderTime}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="right"
                      sx={{ width: "30%" }}
                    >
                      Delivered
                    </Typography>
                  </Button>{" "}
                  <Divider variant="fullWidth" />
                </div>
              )
            })}
          </Paper>
        </Container>
      </Layout>
    )
  }
}

export default Message

const MessageModal = ({ showMessageModal, setShowMessageModal }) => {
  const { customer, date, id, items, total } = showMessageModal.message

  const orderTime = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")
  return (
    <Modal
      open={showMessageModal.status}
      sx={{ padding: { md: "20px", xs: "0" } }}
    >
      <Box sx={boxContainer}>
        <IconButton
          onClick={() => setShowMessageModal({ status: false, message: "" })}
          sx={modalBtn}
        >
          <Cancel color="error" />
        </IconButton>
        <Typography variant="h4" color="secondary.dark">
          Your Order detail
        </Typography>
        <Divider variant="fullWidth" />
        <Typography variant="body2" color="secondary.dark">
          Order : PAN{id.substring(0, 17)}
        </Typography>
        <Typography variant="body2" color="secondary.dark">
          Date : {orderTime}
        </Typography>
        <CustomerData customer={customer} />
        {items.map(list => {
          const { id } = list
          return <ListItemShort key={id} list={list} />
        })}
        <Paper
          variant="outline"
          sx={{
            border: `0.5px solid darkGray`,
            paddingBlock: "10px",
            marginBottom: "30px",
          }}
        >
          <div className="message-subtitle">
            <Typography variant="button" align="left" sx={{ width: "70%" }}>
              Total payment
            </Typography>
            <Typography variant="button" align="right" sx={{ width: "30%" }}>
              ${total / 100}
            </Typography>
          </div>
        </Paper>
      </Box>
    </Modal>
  )
}

const CustomerData = ({ customer }) => {
  const { userData, location, number, street } = customer
  return (
    <Paper
      variant="outline"
      sx={{
        border: `0.5px solid darkGray`,
        padding: "10px",
      }}
    >
      <Typography variant="button" color="secondary.dark">
        Delivered to:
      </Typography>
      <Typography
        variant="body2"
        color="secondary.dark"
        sx={{ textTransform: "capitalize" }}
      >
        {userData.name}
      </Typography>
      <Typography variant="body2" color="secondary.dark">
        {street}
      </Typography>
      {number !== "0" && (
        <Typography variant="body2" color="secondary.dark">
          {number}
        </Typography>
      )}
      <Typography variant="body2" color="secondary.dark">
        {location}
      </Typography>
    </Paper>
  )
}
