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
import { StaticImage } from "gatsby-plugin-image"
import { toolbar } from "../styles/styles"
import React from "react"
import { Link, navigate } from "gatsby"
import { useGlobalContext } from "../context/GlobalContextProvider"

const windowGlobal = typeof window !== "undefined" && window

const Navbar = ({
  showShoppingList,
  setShowShoppingList,
  showUserAccount,
  setShowUserAccount,
}) => {
  const theme = useTheme()

  const { loginStatus, totalItem, user, openAlert, messageNumber } =
    useGlobalContext()

  const handleMail = async () => {
    if (!loginStatus?.login) {
      navigate(`/Menu`)
      return openAlert("error", "you have to login first")
    }
    if (user && user.userData.name === "guest") {
      return openAlert("error", "No message, you're logged in as guest")
    }
    navigate(`/Message`)
  }

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
          <Avatar variant="rounded" alt="icon">
            <StaticImage
              src="../images/icons/icon-light-192x192.png"
              objectFit="fill"
              objectPosition="center"
              placeholder="tracedSVG"
              style={{
                height: "100%",
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="logo"
            />
          </Avatar>
          <Typography
            variant="h4"
            color="accentColor"
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
              badgeContent={messageNumber ? messageNumber : 0}
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
