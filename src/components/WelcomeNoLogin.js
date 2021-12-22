import { Button, Paper, TextField, Typography } from "@mui/material"
import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { red } from "@mui/material/colors"
import { paper, loginButton } from "../styles/styles"
import "../styles/styles.css"
const WelcomeNoLogin = ({ setOpenGuestForm }) => {
  return (
    <Paper variant="outlined" sx={paper}>
      <StaticImage
        src="../images/icons/icon-light-192x192.png"
        alt="icon"
        style={{ width: "70px", height: "70px" }}
      />
      <Typography variant="h4" color="white" align="center">
        Welcome to Pancake Plus Pasta
      </Typography>
      <div className="form-container">
        <form noValidate className="loginForm">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Email..."
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Password..."
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={loginButton}
          >
            Login
          </Button>
        </form>
        <Button
          type="button"
          variant="text"
          color="secondary"
          style={{ color: red[900] }}
        >
          want to enjoy our membership privilege? register!
        </Button>
        <Typography variant="h3" color="white">
          OR
        </Typography>

        <Button
          onClick={() => setOpenGuestForm(true)}
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

export default WelcomeNoLogin
