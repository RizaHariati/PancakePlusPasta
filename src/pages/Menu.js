import {
  Alert,
  Container,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material"
import { graphql } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/layout"
import Submenu from "../components/Submenu"
import { container } from "../styles/styles"

const Menu = ({ data }) => {
  const array = data.allContentfulPancakeMenu.nodes
  const menu = [...new Set(array.map(item => item.type))]
  const [subMenu, setSubMenu] = useState("pancakes")
  const [showAlertMenu, setShowAlertMenu] = useState(false)
  return (
    <Layout>
      <Container maxWidth="md" sx={container}>
        <Snackbar
          open={showAlertMenu}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="error">Please login first</Alert>
        </Snackbar>
        <Typography variant="h2" color="primary">
          Menu Selection
        </Typography>
        <TextField
          select
          label="What do you want to have today? "
          value={subMenu}
          placeholder={subMenu}
          onChange={e => setSubMenu(e.target.value)}
          fullWidth
          sx={{ textTransform: "capitalize" }}
        >
          {menu.map((option, index) => (
            <MenuItem
              key={index}
              value={option}
              sx={{ fontSize: "20px", textTransform: "capitalize" }}
            >
              {option.replace(/-/g, " ")}
            </MenuItem>
          ))}
        </TextField>
        <Submenu type={subMenu} setShowAlertMenu={setShowAlertMenu} />
      </Container>
    </Layout>
  )
}

export default Menu

export const result = graphql`
  query getMenu {
    allContentfulPancakeMenu(
      filter: { type: { nin: "delivery" } }
      sort: { fields: type, order: ASC }
    ) {
      nodes {
        type
        id
      }
    }
  }
`
