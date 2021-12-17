import { Button, Paper, TextField, Typography } from "@mui/material"
import React from "react"
import Layout from "../components/layout"
import Slides from "../components/Slides"
import { subTitle, paper, loginButton } from "../styles/styles"
import "../styles/styles.css"
import { Link } from "gatsby"
const Content = () => {
  return (
    <Layout>
      <div className="content-container">
        <Slides />
        <div className="loginContainer">
          <Paper variant="outlined" sx={paper}>
            <form noValidate className="loginForm">
              <Typography variant="h2" color="white" sx={subTitle}>
                Login
              </Typography>
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
              <Typography variant="h2" color="white" sx={subTitle}>
                Or
              </Typography>
              <Link to="/Menu" style={{ width: "100%" }}>
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  sx={loginButton}
                >
                  Order as guest
                </Button>
              </Link>
            </form>
          </Paper>
        </div>
      </div>
    </Layout>
  )
}

export default Content
