import { createTheme } from "@mui/material/styles"
export const theme = createTheme({
  palette: {
    primary: {
      light: "#EFEDE0",
      main: "#EFEDE0",
      dark: "#EFEDE0",
      contrastText: "#333343",
    },
    secondary: {
      light: "#729384",
      main: "#729384",
      dark: "#729384",
      contrastText: "#333343",
    },
    textColor: "#333343",
    accentColor: "#DFA76B",
    text: { default: "#333343" },
    info: {
      dark: "#E6D3A3",
      main: "#E6D3A3",
      light: "#E6D3A3",
    },
  },
  typography: {
    fontFamily: "'Helvetica Neue', sans-serif",

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
