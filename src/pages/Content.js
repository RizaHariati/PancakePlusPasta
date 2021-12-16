import { Button, Grid, TextField, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Layout from "../components/layout"
import Slides from "../components/Slides"
import { useTheme } from "@emotion/react"
import "../styles/styles.css"
const Content = () => {
  const theme = useTheme()
  return (
    <Layout>
      <div className="content-container">
        <Slides />

        <div
          className="loginContainer"
          style={{ background: theme.palette.primary.light }}
        >
          <form noValidate className="loginForm">
            <Typography variant="h2" color="white">
              Login
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Email..."
              style={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Password..."
              style={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <Button type="submit" variant="contained" color="secondary">
              Log In
            </Button>
            <Typography variant="h2" color="white">
              Or
            </Typography>
            <Button type="submit" variant="contained" color="secondary">
              Log in as guest
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Content
