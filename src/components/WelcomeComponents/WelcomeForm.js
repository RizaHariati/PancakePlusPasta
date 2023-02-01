import { Button, Paper, Typography } from "@mui/material"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { paper, loginButton, iconImage } from "../../styles/styles"
import "../../styles/styles.css"
import LoginForm from "./LoginForm"

const WelcomeForm = ({ setOpenAddressForm, setOpenRegisterForm }) => {
  return (
    <Paper variant="outlined" sx={paper}>
      <StaticImage
        src="../../images/icons/icon-light-192x192.png"
        objectPosition="center"
        placeholder="dominantColor"
        style={iconImage}
        alt="main-icon"
      />

      <Typography variant="h5" color="textColor" align="center">
        Welcome to
      </Typography>
      <Typography variant="h5" color="textColor" align="center">
        Pancake Plus Pasta
      </Typography>
      <div className="form-container ">
        <LoginForm />
        <Button
          type="button"
          variant="text"
          color="error"
          onClick={() => setOpenRegisterForm(true)}
          sx={{
            lineHeight: "16px",
            paddingBlock: "5px",
            display: "block",
            fontWeight: "bold",
          }}
        >
          want to enjoy our membership privilege?{" "}
          <span style={{ textDecoration: "underline" }}>register!</span>
        </Button>

        <Button
          onClick={() =>
            setOpenAddressForm({
              status: true,
              userData: {
                name: "guest",
                email: "default",
                password: "default",
              },
            })
          }
          type="button"
          variant="contained"
          color="secondary"
          sx={loginButton}
        >
          Order as guest
        </Button>
      </div>
    </Paper>
  )
}

export default WelcomeForm
