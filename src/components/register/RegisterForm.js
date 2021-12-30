import { Modal, Paper, Divider, Typography } from "@mui/material"
import React from "react"
import { paperModal } from "../../styles/registerStyles"
import RegisterData from "./RegisterData"

const RegisterForm = ({
  openRegisterForm,
  setOpenRegisterForm,
  setOpenAddressForm,
}) => {
  return (
    <div>
      <Modal open={openRegisterForm}>
        <Paper sx={paperModal}>
          <Typography variant="h4" color="primary">
            Welcome to the club!
          </Typography>
          <Divider variant="fullWidth" />
          <RegisterData
            setOpenRegisterForm={setOpenRegisterForm}
            setOpenAddressForm={setOpenAddressForm}
          />
        </Paper>
      </Modal>
    </div>
  )
}

export default RegisterForm
