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
          <Typography variant="body1" color="white">
            <span style={{ color: theme.palette.primary.light }}>
              {" "}
              Pancake Plus Pasta Copyright
            </span>{" "}
            Riza Hariati &copy;{new Date().getFullYear()}
          </Typography>{" "}
        </a>
        <div className="footerAttribute">
          <a href="https://www.pexels.com/photo/gold-and-silver-baubles-on-white-wall-5725975/">
            <Typography variant="h6" color="whitesmoke">
              Photo by Karolina Grabowska from Pexels
            </Typography>
          </a>
          <a href="https://www.vecteezy.com/free-vector/mail">
            <Typography variant="h6" color="whitesmoke">
              Mail Vectors by Vecteezy
            </Typography>
          </a>
          <a href="https://www.canva.com/">
            <Typography variant="h6" color="whitesmoke">
            Sliders images by Canva
            </Typography>
          </a>
          <a href="https://www.freepik.com/vectors/medical">
            <Typography variant="h6" color="whitesmoke">
              Medical vector created by freepik - www.freepik.com
            </Typography>
          </a>
          <a href="https://www.freepik.com/vectors/money">
            <Typography variant="h6" color="whitesmoke">
              Money vector created by pch.vector - www.freepik.com
            </Typography>
          </a>
          <a href="https://www.vecteezy.com/free-vector/web">
            <Typography variant="h6" color="whitesmoke">
              Web Vectors by Vecteezy
            </Typography>
          </a>

          <a href="https://www.vecteezy.com/free-vector/glass">
            {" "}
            <Typography variant="h6" color="whitesmoke">
              Glass Vectors by Vecteezy{" "}
            </Typography>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
