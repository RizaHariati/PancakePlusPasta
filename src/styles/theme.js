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
      contrastText: "#44403c",
    },
    secondary: {
      light: "#98c2af",
      main: "#729384",
      dark: "#546e62",
      contrastText: "#fefcf1",
    },
    textColor: "#44403c",
    accentColor: "#DD9056",
    text: { default: "#44403c" },
    textInfo: "#57534e",
    info: {
      dark: "#44403c",
      main: "#57534e",
      light: "#78716c",
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
