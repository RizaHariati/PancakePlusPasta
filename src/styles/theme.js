import { createTheme } from "@mui/material/styles"
import { blueGrey, orange } from "@mui/material/colors"
export const theme = createTheme({
  palette: {
    primary: orange,
    secondary: blueGrey,
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "70px",
    },
    h2: {
      fontSize: "40px",
    },
  },
})
