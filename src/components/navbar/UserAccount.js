import { Cancel } from "@mui/icons-material"
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import React from "react"
import "../../styles/styles.css"
import { navigate } from "gatsby"
import { boxContainer, modalBtn, shoppingPaper } from "../../styles/styles"
import { useGlobalContext } from "../../context/GlobalContextProvider"
import { decryptItem } from "../../util/EncryptionHandler"

const UserAccount = ({ showUserAccount, setShowUserAccount }) => {
  const { user, loginStatus, logoutUser } = useGlobalContext()

  const handleLogout = () => {
    logoutUser()
    setShowUserAccount(false)
    navigate("/Welcome/")
  }
  return (
    <Modal open={showUserAccount} sx={{ padding: { md: "20px", xs: "0" } }}>
      <Box sx={boxContainer}>
        <IconButton onClick={() => setShowUserAccount(false)} sx={modalBtn}>
          <Cancel color="error" />
        </IconButton>
        <Typography variant="h4" color="primary.dark">
          Your Account
        </Typography>
        <Paper variant="outlined" sx={shoppingPaper}>
          <Typography
            variant="h3"
            color="secondary.dark"
            sx={{ fontVariant: "small-caps", fontSize: "28px" }}
          >
            {loginStatus.login
              ? `Hi, ${user.userData.name} `
              : "You're not logged in"}
          </Typography>
          <Divider />
          {loginStatus.login && <AccountData user={user} />}
        </Paper>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => setShowUserAccount(false)}
        >
          Cancel
        </Button>
        {loginStatus.login && (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </Box>
    </Modal>
  )
}

export default UserAccount

const AccountData = ({ user }) => {
  const { userData, location, number, phone, street } = user
  const { email } = userData
  const phoneNumber = decryptItem(phone)
  return (
    <div className="user-account">
      <TextField
        variant="standard"
        id="phone"
        label="Phone"
        defaultValue={phoneNumber}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: true,
        }}
        sx={{ color: "black" }}
      />
      {email !== "default" && (
        <TextField
          variant="standard"
          id="email"
          label="Email"
          defaultValue={email}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
          }}
          sx={{ color: "black" }}
        />
      )}
      <TextField
        variant="standard"
        id="street"
        label="Street"
        defaultValue={street}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: true,
        }}
        sx={{ color: "black" }}
      />
      {number !== "0" && (
        <TextField
          variant="standard"
          id="number"
          label="Additional address detail"
          defaultValue={number}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
          }}
          sx={{ color: "black" }}
        />
      )}
      <TextField
        variant="standard"
        id="location"
        label="Region"
        defaultValue={location}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: true,
        }}
        sx={{ color: "black" }}
      />
    </div>
  )
}
