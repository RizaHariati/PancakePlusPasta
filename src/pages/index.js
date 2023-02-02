import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import "../styles/styles.css"
import { Typography } from "@mui/material"
import { theme } from "../styles/theme"
import { makeStyles } from "@mui/styles"
import Seo from "../components/Seo"
import { mainLight } from "../styles/styles"

const useStyles = makeStyles({
  mainBackground: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    transition: "all 1s ease-in",
  },
  mainText1: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },

  image2: {
    display: "block",
    position: "absolute",
    width: "35%",
    left: 0,
    bottom: 0,
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "100%",
    },
  },
  image1: {
    display: "block",
    position: "absolute",
    width: "35%",
    right: 0,
    top: 0,
    zIndex: -1,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "none",
    },
  },
})

const IndexPage = () => {
  const classes = useStyles()

  const [imageMain, setImageMain] = useState(null)
  useEffect(() => {
    window.onbeforeunload = function () {
      localStorage.clear()
    }
    setImageMain("../images/main/fruits1.jpg")
  }, [])

  useEffect(() => {
    if (imageMain) {
      setTimeout(() => {
        navigate("/Welcome/")
      }, 1500)
    }
  }, [imageMain])

  if (!imageMain) {
    return (
      <div
        className={classes.mainBackground}
        style={{ backGroundColor: "#fefcf1" }}
      >
        <Seo title="Home" />
        <div className={classes.mainText1}>
          <Typography
            variant="h5"
            color="secondary"
            align="center"
            sx={{
              fontSize: { md: "40px", sm: "30px", xs: "24px" },
              marginTop: "45px",
            }}
          >
            Hungry?
          </Typography>
        </div>
      </div>
    )
  } else if (imageMain) {
    return (
      <div className={classes.mainBackground}>
        <Seo title="Home" />
        <div className={classes.mainText1}>
          <Typography
            variant="h2"
            color="textColor"
            align="center"
            sx={{ fontSize: { md: "40px", sm: "30px", xs: "24px" } }}
          >
            Welcome to
          </Typography>
          <Typography
            variant="h1"
            color="textColor"
            align="center"
            sx={{ fontSize: { md: "60px", sm: "50px", xs: "40px" } }}
          >
            Pancake&nbsp;
            <span style={{ color: theme.palette.accentColor }}>Plus</span>
            &nbsp;Pasta
          </Typography>
        </div>

        <StaticImage
          src="../images/main/fruits1.jpg"
          alt="fruits2"
          placeholder="tracedSVG"
          layout="constrained"
          className={classes.image1}
          objectFit="cover"
          objectPosition="center"
        />
        <StaticImage
          src="../images/main/fruits2.jpg"
          alt="fruits1"
          placeholder="tracedSVG"
          layout="constrained"
          objectFit="cover"
          objectPosition="center"
          className={classes.image2}
        />
      </div>
    )
  }
}

export default IndexPage
