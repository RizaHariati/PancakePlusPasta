import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"
import { useTheme } from "@mui/styles"
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image"
import { toolbar } from "../styles/styles"
import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { useGlobalContext } from "../context/GlobalContextProvider"
import { graphql, useStaticQuery } from "gatsby"
const getMessageNumber = () => {
  try {
    const messageNumber = JSON.parse(localStorage.getItem("messageNumber"))
    if (messageNumber) return messageNumber
  } catch (error) {
    console.log(error)
  }
  return 0
}

const requestLogo = graphql`
  {
    allImageSharp(
      filter: { id: { eq: "e4e41ef3-5c22-51c1-8d75-a1cd112e07b5" } }
    ) {
      nodes {
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
          width: 40
          height: 40
        )
        id
      }
    }
  }
`
const Navbar = ({
  showShoppingList,
  setShowShoppingList,
  showUserAccount,
  setShowUserAccount,
}) => {
  const theme = useTheme()
  const [messageNumber, setMessageNumber] = useState(0)
  const [numberToSave, setNumberToSave] = useState(getMessageNumber())
  const { loginStatus, totalItem, messageList, user, openAlert } =
    useGlobalContext()

  const logoImage = useStaticQuery(requestLogo)
  const pathToImage = getImage(
    logoImage?.allImageSharp?.nodes[0]?.gatsbyImageData
  )

  const handleMail = async () => {
    await setNumberToSave(prev => prev + messageNumber)
    setMessageNumber(0)
    if (!loginStatus?.login) {
      navigate(`/Menu`)
      return openAlert("error", "you have to login first")
    }
    if (user && user.userData.name === "guest") {
      return openAlert("error", "No message, you're logged in as guest")
    }
    navigate(`/Message`)
  }
  useEffect(() => {
    if (messageList?.length > 0) {
      setMessageNumber(messageList.length - numberToSave)
    }
    // eslint-disable-next-line
  }, [messageList])
  useEffect(() => {
    localStorage.setItem("messageNumber", JSON.stringify(numberToSave))
  }, [numberToSave])

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={toolbar}>
        <Link
          to="/Welcome/"
          style={{
            display: "inline-flex",
            columnGap: "10px",
            cursor: "pointer",
          }}
        >
          <Avatar variant="square" alt="icon">
            {/* <StaticImage
              src="../images/icons/icon-light-192x192.png"
              objectFit="fill"
              objectPosition="center"
              alt="logo"
            /> */}
            <GatsbyImage image={pathToImage} alt="logo" />
          </Avatar>
          <Typography
            variant="h3"
            color="white"
            sx={{ display: { md: "block", sm: "none", xs: "none" } }}
          >
            Pancake{" "}
            <span style={{ color: theme.palette.secondary.dark }}>Plus</span>{" "}
            Pasta
          </Typography>
        </Link>
        <div className="menu-links">
          <Tooltip title="your order">
            <Badge badgeContent={totalItem} color="error" overlap="circular">
              <IconButton
                variant="contained"
                color="secondary"
                onClick={() => setShowShoppingList(!showShoppingList)}
              >
                <Avatar style={{ height: 35, width: 35 }}>
                  <StaticImage src="../images/icons/cart.jpg" alt="cart" />
                </Avatar>
              </IconButton>
            </Badge>
          </Tooltip>

          <Tooltip title="messages">
            <Badge
              badgeContent={messageNumber}
              color="error"
              overlap="circular"
            >
              <IconButton
                variant="contained"
                color="secondary"
                onClick={handleMail}
              >
                <Avatar style={{ height: 35, width: 35 }}>
                  <StaticImage src="../images/icons/mail.jpg" alt="mail" />
                </Avatar>
              </IconButton>
            </Badge>
          </Tooltip>

          <Link to="/Menu">
            <Tooltip title="menu">
              <IconButton variant="contained" color="secondary">
                <Avatar style={{ height: 35, width: 35 }}>
                  <StaticImage
                    src="../images/icons/menu.png"
                    alt="mail"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Link>

          <Tooltip
            title="your account"
            onClick={() => setShowUserAccount(!showUserAccount)}
          >
            <Badge
              color="success"
              overlap="circular"
              variant="dot"
              invisible={!loginStatus?.login}
            >
              <IconButton variant="contained">
                <Avatar style={{ height: 35, width: 35 }}>
                  <StaticImage src="../images/icons/user.jpg" alt="user" />
                </Avatar>
              </IconButton>
            </Badge>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
