import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import "../styles/styles.css"
import { Typography } from "@mui/material"
import { theme } from "../styles/theme"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  mainBackground: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    transition: "all 1s ease-in",
  },
  mainText: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 20,

    [theme.breakpoints.down("md")]: {
      paddingBottom: 100,
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 10,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-start",
      padding: 3,
    },
  },
  image1: {
    display: "none",
    position: "absolute",
    height: "100vh",
    // width: "100%",
    bottom: 0,
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      bottom: -50,
    },
    [theme.breakpoints.down("xs")]: {
      bottom: "0px",
    },
  },
  image2: {
    display: "block",
    position: "absolute",
    width: "70%",
    height: "100%",
    top: 0,
    right: 0,
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image3: {
    display: "block",
    zIndex: -2,
    objectFit: "cover",
    objectPosition: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  subTitle: {
    fontSize: "40px",
    transition: "all 1s ease-in",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      textAlign: "center",
    },
  },
  mainTitle: {
    fontSize: "65px",
    transition: "all 1s ease-in",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      textAlign: "center",
    },
  },
})

const IndexPage = () => {
  const classes = useStyles()
  const [enter, setEnter] = useState(0)

  useEffect(() => {
    if (enter < 1) {
      setTimeout(async () => {
        await setEnter(prev => prev + 1)
        navigate("/Content")
      }, 1500)
    }
  }, [enter])
  return (
    <div className={classes.mainBackground}>
      <div className={classes.mainText}>
        <Typography
          variant="h2"
          color="primary"
          align="center"
          className={classes.subTitle}
        >
          Welcome to
        </Typography>
        <Typography variant="h1" color="primary" className={classes.mainTitle}>
          Pancake{" "}
          <span style={{ color: theme.palette.secondary.dark }}>Plus</span>{" "}
          Pasta
        </Typography>
        <StaticImage
          src="../images/main/detail.jpg"
          alt="detail"
          placeholder="tracedSVG"
          layout="constrained"
          height={225}
          className={classes.image3}
        />
      </div>
      <StaticImage
        src="../images/main/fruits2.jpg"
        alt="fruits2"
        placeholder="tracedSVG"
        layout="constrained"
        className={classes.image1}
        objectFit="cover"
        objectPosition="center"
      />
      <StaticImage
        src="../images/main/fruits1.jpg"
        alt="fruits1"
        placeholder="tracedSVG"
        layout="constrained"
        className={classes.image2}
      />
    </div>
  )
}

export default IndexPage
