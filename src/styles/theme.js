import { createTheme } from "@mui/material/styles"
import { grey } from "@mui/material/colors"
export const theme = createTheme({
  palette: {
    primary: {
      light: "#B6C454",
      main: "#91972A",
      dark: "#4a4d0f",
      contrastText: "#f2f4f3",
    },
    secondary: {
      light: "#E6D3A3",
      main: "#ffb300",
      dark: "#ff6f00",
      contrastText: "#000",
    },
    info: {
      dark: grey[900],
      main: grey[800],
      light: grey[500],
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "60px",
    },
    h2: {
      fontSize: "45px",
    },
    h3: {
      fontSize: "32px",
      textTransform: "capitalize",
    },
    h4: {
      fontSize: "24px",
      textTransform: "capitalize",
    },
    h6: {
      fontSize: "10px",
      lineHeight: "12px",
      fontWeight: 300,
    },
  },
})
