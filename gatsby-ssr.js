import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { GlobalProvider } from "./src/context/GlobalContextProvider"
import { theme } from "./src/styles/theme"
const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>{element} </GlobalProvider>
    </ThemeProvider>
  )
}

export { wrapRootElement }
