import { Button, Container, Divider, Paper, Typography } from "@mui/material"
import { typography } from "@mui/system"
import React from "react"
import Layout from "../components/layout"
import { useGlobalContext } from "../context/GlobalContextProvider"
import { container, paper, lineBtn } from "../styles/messageStyles"

const Message = () => {
  const { messageList } = useGlobalContext()
  if (!messageList) return <div></div>
  else {
    return (
      <Layout>
        <Container maxWidth="sm" sx={container}>
          <Paper variant="outlined" sx={paper}>
            <Typography variant="h4" color="primary.dark">
              My Cart
            </Typography>
            <Divider variant="fullWidth" />
            {messageList.map(message => {
              const { customer, id, items, total } = message
              console.log(items)
              return (
                <div>
                  <Button variant="text" color="inherit" sx={lineBtn} key={id}>
                    <Typography
                      variant="body2"
                      align="left"
                      sx={{ width: "70%" }}
                    >
                      Order id : {id}
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
