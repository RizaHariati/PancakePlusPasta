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
        <Typography variant="body1" color="white">
          <span style={{ color: theme.palette.primary.light }}>
            {" "}
            Pancake Plus Pasta Copyright
          </span>{" "}
          Riza Hariati &copy;{new Date().getFullYear()}
        </Typography>

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
          <div style={{ display: "flex" }}>
            <Typography variant="h6" color="whitesmoke">
              Image by-
            </Typography>
            <a href="https://pixabay.com/users/memed_nurrohmad-3307648/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2389219">
              <Typography variant="h6" color="whitesmoke">
                Memed_Nurrohmad-
              </Typography>
            </a>
            <Typography variant="h6" color="whitesmoke">
              from_
            </Typography>
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2389219">
              <Typography variant="h6" color="whitesmoke">
                Pixabay
              </Typography>
            </a>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
