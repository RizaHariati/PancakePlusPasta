import { Button, Paper, Typography } from "@mui/material"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { red } from "@mui/material/colors"
import { paper, loginButton } from "../../styles/styles"
import "../../styles/styles.css"
import { Favorite } from "@mui/icons-material"
import { useGlobalContext } from "../../context/GlobalContextProvider"

const LoginAsGuest = ({ setOpenRegisterForm }) => {
  const { logoutUser } = useGlobalContext()

  const handleRegister = () => {
    logoutUser()
    setOpenRegisterForm(true)
  }
  return (
    <Paper variant="outlined" sx={paper}>
      <Typography
        variant="h4"
        color="textColor"
        align="center"
        sx={{ marginBottom: "10px" }}
      >
        You are logged in as Guest
      </Typography>
      <div className="form-container">
        <StaticImage
          src="../../images/main/lunch.jpg"
          alt="lunch"
          style={{ borderRadius: "3px", width: "80%", marginBottom: "10px" }}
        />
        <Button
          type="button"
          variant="outlined"
          color="error"
          endIcon={<Favorite />}
          startIcon={<Favorite />}
          onClick={handleRegister}
          sx={{ marginBottom: "10px" }}
        >
          still time to join us & register!
        </Button>

        <Button
          onClick={() => logoutUser()}
          type="button"
          variant="contained"
          color="secondary"
          sx={[loginButton, { width: "fit-content" }]}
        >
          &nbsp;&nbsp;Exit & Login as new guest&nbsp;&nbsp;
        </Button>
      </div>
    </Paper>
  )
}

export default LoginAsGuest
