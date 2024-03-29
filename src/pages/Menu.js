import { Container, MenuItem, TextField, Typography } from "@mui/material"
import { graphql } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/layout"

import { container } from "../styles/styles"
import Seo from "../components/Seo"
import Submenu from "../components/MenuComponents/Submenu"
import MenuDetail from "../components/MenuComponents/MenuDetail"

const Menu = ({ data }) => {
  const array = data.allContentfulPancakeMenu.nodes
  const menu = [...new Set(array.map(item => item.type))]
  const [subMenu, setSubMenu] = useState("pancakes")

  return (
    <Layout>
      <Seo title="Menu" description="Select your menu" />
      <MenuDetail />
      <Container maxWidth="md" sx={container}>
        <Typography
          variant="h4"
          color="secondary"
          sx={{ fontWeight: "bold", fontFamily: "cursive" }}
        >
          Menu Selection
        </Typography>
        <TextField
          select
          label="What do you want to have today? "
          value={subMenu}
          color="secondary"
          placeholder={subMenu}
          onChange={e => setSubMenu(e.target.value)}
          fullWidth
          sx={{ textTransform: "capitalize" }}
        >
          {menu.map((option, index) => (
            <MenuItem
              key={index}
              value={option}
              sx={{ textTransform: "capitalize" }}
            >
              {option.replace(/-/g, " ")}
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
