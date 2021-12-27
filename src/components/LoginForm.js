import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
} from "@mui/material"
import React, { useState } from "react"
import { loginButton } from "../styles/styles"
import { useFormik } from "formik"
import { validationSchema2 } from "../util/RegistrationFunctions"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useGlobalContext } from "../context/GlobalContextProvider"

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { loginMember, loginMessage, alert, alertStatus, loginStatus } =
    useGlobalContext()
  const loginData = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      loginMember(values.email, values.password.toLowerCase())
    },
    validationSchema: validationSchema2,
  })
  return (
    <form noValidate className="loginForm" onSubmit={loginData.handleSubmit}>
      <Snackbar
        open={alert}
        onClose={() => {
          if (loginStatus.login) {
            console.log(loginStatus.login)
          }
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={alertStatus}>{loginMessage}</Alert>
      </Snackbar>
      <TextField
        fullWidth
        id="email"
        name="email"
        type="email"
        variant="outlined"
        size="small"
        color="info"
        error={
          loginData.errors.email === "required" ||
          loginData.errors.email === "invalid email format"
        }
        label={loginData.errors.email || "Your Email"}
        {...loginData.getFieldProps("email")}
        style={{ backgroundColor: "white", borderRadius: "5px" }}
      />
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel
          htmlFor="password"
          color="info"
          error={loginData.errors.password === "required"}
        >
          {loginData.errors.password || "password"}
        </InputLabel>
        <OutlinedInput
          id="password"
          name="password"
          label={loginData.errors.password || "password"}
          error={loginData.errors.password === "required"}
          type={showPassword ? "text" : "password"}
          // value={userData.values.password1 }
          // onChange={userData.handleChange}
          color="info"
          {...loginData.getFieldProps("password")}
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "5px",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={loginButton}
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
