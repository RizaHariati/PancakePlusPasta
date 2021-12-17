import { createTheme } from "@mui/material/styles"
import { grey, orange } from "@mui/material/colors"
export const theme = createTheme({
  palette: {
    primary: orange,
    secondary: grey,
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "70px",
    },
    h2: {
      fontSize: "40px",
    },
    h3: {
      fontSize: "32px",
    },
    h6: {
      fontSize: "10px",
      lineHeight: "12px",
      fontWeight: 300,
    },
  },
})
