import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material"

import React, { useState } from "react"
import { loginButton } from "../../styles/styles"
import { useFormik } from "formik"
import { validationSchema2 } from "../../util/RegistrationFunctions"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useGlobalContext } from "../../context/GlobalContextProvider"
import { navigate } from "gatsby"
import { decryptItem } from "../../util/EncryptionHandler"

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { memberList, openAlert, loginMember } = useGlobalContext()
  const loginData = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const { password } = values
      const email = values.email.toLowerCase()
      if (!memberList) {
        resetForm()
        return openAlert("error", "User not found, please register")
      }

      const findMember = await memberList.find(
        member => member.userData.email === email
      )
      if (!findMember) {
        openAlert("error", "User not found, please register")
        resetForm()
        return
      }
      const passwordDecrypted = decryptItem(findMember.userData.password)
      if (passwordDecrypted !== password) {
        openAlert("error", "wrong password")
      } else {
        loginMember(email)
        navigate("/Menu")
      }

      resetForm()
      setSubmitting(false)
    },
    validationSchema: validationSchema2,
  })
  return (
    <form
      noValidate
      className="loginForm"
      autoComplete="disable"
      onSubmit={loginData.handleSubmit}
    >
      <TextField
        fullWidth
        id="email"
        name="email"
        type="email"
        variant="outlined"
        size="small"
        color="info"
        inputProps={{
          autoComplete: "new-password",
          form: {
            autoComplete: "off",
          },
        }}
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
          inputProps={{
            autoComplete: "new-password",
            form: {
              autoComplete: "off",
            },
          }}
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
