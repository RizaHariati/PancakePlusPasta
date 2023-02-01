import { Button, Paper, Typography } from "@mui/material"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { paper, loginButton } from "../../styles/styles"
import "../../styles/styles.css"
import { useGlobalContext } from "../../context/GlobalContextProvider"
import { Link } from "gatsby"

const LoginAsMember = () => {
  const { user } = useGlobalContext()
  if (!user) return <div></div>
  else {
    const { userData } = user
    return (
      <Paper variant="outlined" sx={paper}>
        <Typography
          variant="h5"
          color="secondary"
          align="center"
          sx={{ display: "block" }}
        >
          Hi,{" "}
          <span style={{ textTransform: "capitalize", color: "#C36021" }}>
            {userData.name}
          </span>{" "}
          ! Ready to order?
        </Typography>
        <div className="form-container">
          <StaticImage
            src="../../images/main/newyear.jpg"
            alt="lunch"
            style={{ borderRadius: "3px" }}
          />
          <Typography
            variant="button"
            color="error"
            align="center"
            sx={{ lineHeight: "17px" }}
          >
            Come and hang out with us for the New Year's Eve! We have 15%
            discount for P3 members.
          </Typography>
          <Link to="/Menu">
            <Button
              type="button"
              variant="contained"
              color="secondary"
              sx={loginButton}
            >
              Back to Menu
            </Button>
          </Link>
        </div>
      </Paper>
    )
  }
}

export default LoginAsMember
