import { AppBar, Toolbar, Typography } from "@mui/material"
import React from "react"
import { useTheme } from "@mui/styles"
import { footerToolbar } from "../styles/styles"

const Footer = () => {
  const theme = useTheme()

  const footerAppbar = {
    background: theme.palette.secondary.dark,

    bottom: { md: -80, xs: -135 },
    top: "auto",
    textAlign: { md: "left", xs: "center" },
    height: { md: 80, xs: 135 },
  }

  return (
    <AppBar position="sticky" sx={footerAppbar}>
      <Toolbar sx={footerToolbar}>
        <a href="https://ichacodes.com/">
          <Typography variant="body2" color="white">
            Pancake Plus Pasta by Riza Hariati for
            <span style={{ color: "#DD9056", textDecoration: "underline" }}>
              &nbsp;IchaCodes&nbsp;
            </span>
            &nbsp;&copy;{new Date().getFullYear()}
          </Typography>
        </a>
        <div className="footerAttribute">
          <a href="https://www.pexels.com/photo/gold-and-silver-baubles-on-white-wall-5725975/">
            <Typography variant="h6" color="whitesmoke">
              | Photo by Karolina Grabowska from Pexels |
            </Typography>
          </a>
          <a href="https://www.vecteezy.com/free-vector/mail">
            <Typography variant="h6" color="whitesmoke">
              | Mail Vectors by Vecteezy |
            </Typography>
          </a>
          <a href="https://www.canva.com/">
            <Typography variant="h6" color="whitesmoke">
              | Sliders images by Canva |
            </Typography>
          </a>
          <a href="https://pixabay.com/">
            <Typography variant="h6" color="primary">
              | Images by Pixabay |
            </Typography>
          </a>
          <a href="https://www.freepik.com/vectors/money">
            <Typography variant="h6" color="primary">
              | Money vector created by pch.vector - www.freepik.com |
            </Typography>
          </a>
          <a href="https://www.vecteezy.com/free-vector/web">
            <Typography variant="h6" color="primary">
              | Web Vectors by Vecteezy |
            </Typography>
          </a>

          <a href="https://www.vecteezy.com/free-vector/glass">
            {" "}
            <Typography variant="h6" color="primary">
              | Glass Vectors by Vecteezy |
            </Typography>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
