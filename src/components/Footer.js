import { AppBar, Toolbar, Typography } from "@mui/material"
import React from "react"
import { useTheme } from "@mui/styles"
import { footerToolbar } from "../styles/styles"

const Footer = () => {
  const theme = useTheme()

  const footerAppbar = {
    background: theme.palette.secondary.dark,
    position: "absolute",
    bottom: { md: -80, xs: -130 },
    top: "auto",
    textAlign: { md: "left", xs: "center" },
    height: { md: 80, xs: 130 },
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

        <div className="footerAttribute">
          <a href="https://www.vecteezy.com/free-vector/cartoon">
            <Typography variant="h6" color="whitesmoke">
              Cartoon Vectors by Vecteezy
            </Typography>
          </a>
          <a href="https://www.vecteezy.com/free-vector/mail">
            <Typography variant="h6" color="whitesmoke">
              Mail Vectors by Vecteezy
            </Typography>
          </a>
          <a href="https://www.freepik.com/vectors/people">
            <Typography variant="h6" color="whitesmoke">
              People vector created by muammark - www.freepik.com
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
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
