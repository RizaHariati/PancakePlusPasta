import { Button, Paper, Typography } from "@mui/material"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { red } from "@mui/material/colors"
import { paper, loginButton } from "../styles/styles"
import "../styles/styles.css"
import { Favorite } from "@mui/icons-material"
import { useGlobalContext } from "../context/GlobalContextProvider"

const LoginAsGuest = () => {
  const { newGuest } = useGlobalContext()
  return (
    <Paper variant="outlined" sx={paper}>
      <Typography variant="h4" color="white" align="center">
        You are logged in as Guest
      </Typography>
      <div className="form-container">
        <StaticImage
          src="../images/main/lunch.jpg"
          alt="lunch"
          style={{ borderRadius: "3px" }}
        />
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          style={{ color: red[900] }}
          endIcon={<Favorite />}
          startIcon={<Favorite />}
        >
          still time to join us & register!
        </Button>

        <Button
          onClick={newGuest}
          type="button"
          variant="contained"
          color="secondary"
          sx={loginButton}
        >
          Login as new guest
        </Button>
      </div>
    </Paper>
  )
}

export default LoginAsGuest
