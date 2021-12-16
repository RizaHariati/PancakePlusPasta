import { AppBar, Toolbar, Typography } from "@mui/material"
import React from "react"
import { useTheme } from "@mui/styles"
import { footerToolbar } from "../styles/styles"
const Footer = () => {
  const theme = useTheme()
  const footerAppbar = {
    background: theme.palette.secondary.dark,
    position: "absolute",
    bottom: -130,
    top: "auto",
    height: 130,
  }
  return (
    <AppBar sx={footerAppbar}>
      <Toolbar sx={footerToolbar}>
        <Typography variant="body1" color="white">
          <span style={{ color: theme.palette.primary.light }}>
            {" "}
            Pancake Plus Pasta Copyright
          </span>{" "}
          Riza Hariati &copy;2021
        </Typography>

        <a href="https://www.vecteezy.com/free-vector/cartoon">
          <Typography variant="body2" color="whitesmoke">
            Cartoon Vectors by Vecteezy
          </Typography>
        </a>

        <a href="https://www.vecteezy.com/free-vector/mail">
          <Typography variant="body2" color="whitesmoke">
            Mail Vectors by Vecteezy
          </Typography>
        </a>

        <a href="https://www.freepik.com/vectors/people">
          <Typography variant="body2" color="whitesmoke">
            People vector created by muammark - www.freepik.com
          </Typography>
        </a>
        <a href="https://www.freepik.com/vectors/medical">
          <Typography variant="body2" color="whitesmoke">
            Medical vector created by freepik - www.freepik.com
          </Typography>
        </a>
        <a href="https://www.freepik.com/vectors/money">
          <Typography variant="body2" color="whitesmoke">
            Money vector created by pch.vector - www.freepik.com
          </Typography>
        </a>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
