import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  Link,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"
import { useTheme } from "@mui/styles"
import { StaticImage } from "gatsby-plugin-image"
import { links, toolbar } from "../styles/styles"
import React from "react"
import { AccountCircle } from "@mui/icons-material"

const Navbar = () => {
  const theme = useTheme()

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={toolbar}>
        <Link to="/Content" sx={links}>
          <Avatar variant="square" alt="icon">
            <StaticImage
              src="../images/icons/icon-light-192x192.png"
              objectFit="fill"
              objectPosition="center"
              alt="logo"
            />
          </Avatar>
          <Typography variant="h3" color="white">
            Pancake{" "}
            <span style={{ color: theme.palette.secondary.dark }}>Plus</span>{" "}
            Pasta
          </Typography>
        </Link>
        <div className="menu-links">
          <Tooltip title="your order">
            <Badge badgeContent={1} color="error" overlap="circular">
              <IconButton variant="contained" color="secondary">
                <Avatar>
                  <StaticImage src="../images/icons/cart.jpg" alt="cart" />
                </Avatar>
              </IconButton>
            </Badge>
          </Tooltip>

          <Tooltip title="messages">
            <Badge badgeContent={1} color="error" overlap="circular">
              <IconButton variant="contained" color="secondary">
                <Avatar>
                  <StaticImage src="../images/icons/mail.jpg" alt="mail" />
                </Avatar>
              </IconButton>
            </Badge>
          </Tooltip>
          <Tooltip title="your account">
            <IconButton variant="contained">
              <Avatar>
                <StaticImage src="../images/icons/user.jpg" alt="user" />
              </Avatar>
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
