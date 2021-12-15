import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./src/styles/theme"
const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

export { wrapRootElement }
