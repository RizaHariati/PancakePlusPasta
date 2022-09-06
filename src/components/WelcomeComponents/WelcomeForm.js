import { Button, Paper, Typography } from "@mui/material"
import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { paper, loginButton } from "../../styles/styles"
import "../../styles/styles.css"
import LoginForm from "./LoginForm"
import { graphql, useStaticQuery } from "gatsby"

const requestImage = graphql`
  {
    allImageSharp(
      filter: { id: { eq: "e4e41ef3-5c22-51c1-8d75-a1cd112e07b5" } }
    ) {
      nodes {
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
          width: 70
          height: 70
        )
        id
      }
    }
  }
`

const WelcomeForm = ({ setOpenAddressForm, setOpenRegisterForm }) => {
  const logoImage = useStaticQuery(requestImage)
  const pathToImage = getImage(
    logoImage?.allImageSharp?.nodes[0]?.gatsbyImageData
  )

  return (
    <Paper variant="outlined" sx={paper}>
      <GatsbyImage image={pathToImage} alt="icon" />

      <Typography variant="h4" color="white" align="center">
        Welcome to Pancake Plus Pasta
      </Typography>
      <div className="form-container">
        <LoginForm />
        <Button
          type="button"
          variant="text"
          color="error"
          onClick={() => setOpenRegisterForm(true)}
        >
          want to enjoy our membership privilege? register!
        </Button>
        <Typography variant="h4" color="white">
          OR
        </Typography>

        <Button
          onClick={() =>
            setOpenAddressForm({
              status: true,
              userData: {
                name: "guest",
                email: "default",
                password: "default",
              },
            })
          }
          type="button"
          variant="contained"
          color="secondary"
          sx={loginButton}
        >
          Order as guest
        </Button>
      </div>
    </Paper>
  )
}

export default WelcomeForm
