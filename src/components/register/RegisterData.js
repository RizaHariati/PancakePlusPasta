import {
  Button,
  ButtonGroup,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
} from "@mui/material"

import { useFormik } from "formik"
import React, { useState } from "react"
import { paperForm } from "../../styles/registerStyles"
import { VisibilityOff, Visibility } from "@mui/icons-material"
import { validationSchema1 } from "../../util/RegistrationFunctions"
import { encryptItem } from "../../util/EncryptionHandler"
import { useGlobalContext } from "../../context/GlobalContextProvider"

const RegisterData = ({ setOpenRegisterForm, setOpenAddressForm }) => {
  const { memberList, openAlert } = useGlobalContext()
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const userData = useFormik({
    initialValues: {
      name: "",
      email: "",
      password1: "",
      password2: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      const passwordEncrypted = encryptItem(values.password1)
      if (memberList) {
        const findMember = memberList.find(
          member => member.userData.email === values.email
        )
        if (findMember) {
          openAlert("error", "Email already exist, please login")
          return setOpenRegisterForm(false)
        }
      }

      setOpenAddressForm({
        status: true,
        userData: {
          name: values.name,
          email: values.email.toLowerCase(),
          password: passwordEncrypted,
        },
      })

      setOpenRegisterForm(false)
      setSubmitting(false)
      setOpenRegisterForm(false)
    },
    validationSchema: validationSchema1,
  })

  return (
    <Paper variant="outlined" sx={paperForm}>
      <form onSubmit={userData.handleSubmit} className="loginForm">
        <TextField
          id="name"
          name="name"
          error={userData.errors.name === "required"}
          label={userData.errors.name || "Your Name"}
          type="text"
          size="small"
          color="secondary"
          fullWidth
          variant="outlined"
          // value={userData.values.name}
          // onChange={userData.handleChange}
          {...userData.getFieldProps("name")}
        />

        <FormControl
          fullWidth
          variant="outlined"
          size="small"
          color="secondary"
        >
          <InputLabel
            htmlFor="email"
            error={
              userData.errors.email === "required" ||
              userData.errors.email === "invalid email format"
            }
          >
            {userData.errors.email || "Your email"}
          </InputLabel>
          <OutlinedInput
            id="email"
            name="email"
            label={userData.errors.email || "Your email"}
            error={
              userData.errors.email === "required" ||
              userData.errors.email === "invalid email format"
            }
            type="email"
            // value={userData.values.email}
            // onChange={userData.handleChange}
            {...userData.getFieldProps("email")}
          />
        </FormControl>

        <FormControl
          fullWidth
          variant="outlined"
          color="secondary"
          size="small"
        >
          <InputLabel
            htmlFor="password1"
            error={userData.errors.password1 === "required"}
          >
            {userData.errors.password1 || "password"}
          </InputLabel>
          <OutlinedInput
            id="password1"
            name="password1"
            label={userData.errors.password1 || "password"}
            error={userData.errors.password1 === "required"}
            type={showPassword1 ? "text" : "password"}
            // value={userData.values.password1 }
            // onChange={userData.handleChange}
            {...userData.getFieldProps("password1")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword1(!showPassword1)}>
                  {showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl
          fullWidth
          variant="outlined"
          color="secondary"
          size="small"
        >
          <InputLabel
            error={
              userData.errors.password2 === "retype password" ||
              userData.errors.password2 === "Password must match"
            }
            htmlFor="password2"
          >
            {userData.errors.password2 || "retype password"}
          </InputLabel>
          <OutlinedInput
            id="password2"
            name="password2"
            label={userData.errors.password2 || "retype password"}
            error={
              userData.errors.password2 === "retype password" ||
              userData.errors.password2 === "Password must match"
            }
            type={showPassword2 ? "text" : "password"}
            // value={userData.values.password2 || ""}
            // onChange={userData.handleChange}
            {...userData.getFieldProps("password2")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword2(!showPassword2)}>
                  {showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <ButtonGroup>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              width: "100px",
            }}
            onClick={() => setOpenRegisterForm(false)}
          >
            cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              color: "white",
              width: "100px",
            }}
            disableElevation
          >
            Register
          </Button>
        </ButtonGroup>
      </form>
    </Paper>
  )
}

export default RegisterData
