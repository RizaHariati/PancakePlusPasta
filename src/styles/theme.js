import { createTheme } from "@mui/material/styles"
import { grey, orange } from "@mui/material/colors"
export const theme = createTheme({
  palette: {
    primary: orange,
    secondary: {
      dark: grey[700],
      main: grey[300],
      light: grey[200],
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
