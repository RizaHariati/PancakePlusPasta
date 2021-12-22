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
import { Link } from "gatsby"
import { useGlobalContext } from "../context/GlobalContextProvider"
const Navbar = ({ showList, setShowList }) => {
  const theme = useTheme()
  const { totalItem } = useGlobalContext()
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
            <StaticImage
              src="../images/icons/icon-light-192x192.png"
              objectFit="fill"
              objectPosition="center"
              alt="logo"
            />
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
                onClick={() => setShowList(!showList)}
              >
                <Avatar style={{ height: 35, width: 35 }}>
                  <StaticImage src="../images/icons/cart.jpg" alt="cart" />
                </Avatar>
              </IconButton>
            </Badge>
          </Tooltip>

          <Tooltip title="messages">
            <Badge badgeContent={1} color="error" overlap="circular">
              <IconButton variant="contained" color="secondary">
                <Avatar style={{ height: 35, width: 35 }}>
                  <StaticImage src="../images/icons/mail.jpg" alt="mail" />
                </Avatar>
              </IconButton>
            </Badge>
          </Tooltip>
          <Tooltip title="your account">
            <IconButton variant="contained">
              <Avatar style={{ height: 35, width: 35 }}>
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
