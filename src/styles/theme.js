import { createTheme } from "@mui/material/styles"
export const theme = createTheme({
  palette: {
    error: {
      light: "#E4D3BD",
      main: "#DD9056",
      dark: "#C36021",
    },
    primary: {
      light: "#fefcf1",
      main: "#EFEDE0",
      dark: "#cfcdc1",
      contrastText: "#333343",
    },
    secondary: {
      light: "#98c2af",
      main: "#729384",
      dark: "#546e62",
      contrastText: "#fefcf1",
    },
    textColor: "#333343",
    accentColor: "#DD9056",
    text: { default: "#333343" },
    info: {
      dark: "#333343",
      main: "#333343",
      light: "#333343",
    },
  },

  typography: {
    fontFamily: "'Helvetica Neue', sans-serif",

    h6: {
      fontSize: "10px",
      lineHeight: "12px",
      fontWeight: 300,
    },
  },
})
