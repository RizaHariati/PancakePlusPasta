import { Container, MenuItem, TextField, Typography } from "@mui/material"
import { graphql } from "gatsby"
import React, { useState } from "react"

import Layout from "../components/layout"
import Submenu from "../components/Submenu"

const Menu = ({ data }) => {
  const array = data.allContentfulPancakeMenu.nodes
  const menu = [...new Set(array.map(item => item.type))]

  const [subMenu, setSubMenu] = useState("pancakes")
  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h2" color="primary">
          Menu Selection
        </Typography>
        <TextField
          select
          label="Select"
          value={subMenu}
          placeholder={subMenu}
          onChange={e => setSubMenu(e.target.value)}
          helperText="Please select your currency"
          fullWidth
          sx={{ textTransform: "capitalize" }}
        >
          {menu.map((option, index) => (
            <MenuItem
              key={index}
              value={option}
              sx={{ fontSize: "20px", textTransform: "capitalize" }}
            >
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Submenu type={subMenu} />
      </Container>
    </Layout>
  )
}

export default Menu

export const result = graphql`
  query getMenu {
    allContentfulPancakeMenu {
      nodes {
        type
        id
      }
    }
  }
`
