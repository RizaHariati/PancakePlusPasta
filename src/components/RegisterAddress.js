import {
  Button,
  ButtonGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import React, { useState, useEffect } from "react"
import { paperForm } from "../styles/modalStyles"

const RegisterAddress = ({
  handleStartOrdering,
  setOpenRegisterForm,
  address,
}) => {
  const [addressValue, setAddressValue] = useState("")
  const [addressValueError, setAddressValueError] = useState({
    status: false,
    message: "Location is out of our delivery area",
  })
  const [userName, setUserName] = useState("")
  const [userNameError, setUserNameError] = useState({
    status: false,
    message: "Your name...",
  })

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState({
    status: false,
    message: "Your email...",
  })
  const [phone, setPhone] = useState()
  const [phoneError, setPhoneError] = useState({
    status: false,
    message: "Phone number",
  })
  const [street, setStreet] = useState("")
  const [streetError, setStreetError] = useState({
    status: false,
    message: "Edit street name",
  })
  const [number, setNumber] = useState("")
  const [numberError, setNumberError] = useState({
    status: false,
    message: "Add address detail (number/floor/block)",
  })

  useEffect(() => {
    setAddressValue("")

    if (address.inArea) {
      const { Address, Neighborhood, District, Region, Postal } =
        address.location
      setAddressValue(`${Neighborhood},${District},${Region},${Postal}`)
      setAddressValueError({
        status: false,
        message: "Location selected",
      })
      if (!street) {
        setStreet(Address)
        setStreetError({
          status: false,
          message: "Edit street name",
        })
      }
    } else {
      setAddressValue("")
      setAddressValueError({
        status: true,
        message: "Pick Location on the Map within delivery area",
      })
    }
    // eslint-disable-next-line
  }, [address])

  const handleSubmit = e => {
    e.preventDefault()
    if (!userName) {
      return setUserNameError({
        status: true,
        message: "Name is required",
      })
    }

    if (!phone || phone.length < 11 || phone.length > 13) {
      return setPhoneError({
        status: true,
        message: "Phone number is not valid",
      })
    }
    if (!addressValue) {
      return setAddressValueError({
        status: true,
        message: "Pick Location on the Map",
      })
    }
    if (!street) {
      return setStreetError({
        status: true,
        message: "street name is required",
      })
    }
    if (!number) {
      return setNumberError({
        status: true,
        message: "please add more detail or put '0' ",
      })
    }
    if (userName && phone && addressValue && street && number) {
      console.log(phone.toString())
      const fullData = {
        name: userName,
        email: "default",
        phone: phone.toString(),
        location: addressValue,
        street,
        number,
      }
      handleStartOrdering(fullData)
      setPhoneError({
        status: false,
        message: "phone number",
      })

      setStreetError({
        status: false,
        message: "Edit street name",
      })

      setAddressValue("")
      setPhone()
      setStreet("")
      setNumber("")
    }
  }
  return (
    <Paper variant="outlined" sx={paperForm} style={{ overflowY: "scroll" }}>
      <Typography>Please fill in your data</Typography>
      <form noValidate className="guest-loginForm" onSubmit={handleSubmit}>
        <TextField
          min={0}
          error={userNameError.status}
          size="small"
          fullWidth
          variant="outlined"
          type="number"
          value={userName || ""}
          label={userNameError.message}
          onChange={e => setPhone(e.target.value)}
        />

        <TextField
          min={0}
          error={phoneError.status}
          size="small"
          fullWidth
          variant="outlined"
          type="number"
          value={phone || ""}
          label={phoneError.message}
          onChange={e => setPhone(e.target.value)}
          helperText="we will send text to verify your phone number"
        />
        <TextField
          error={addressValueError.status}
          size="small"
          fullWidth
          variant="outlined"
          type="text"
          value={addressValue}
          label={addressValueError.message}
          InputProps={{
            disabled: true,
          }}
        />
        <TextField
          error={streetError.status}
          size="small"
          fullWidth
          variant="outlined"
          type="text"
          value={street || ""}
          label={streetError.message}
          onChange={e => setStreet(e.target.value)}
        />
        <TextField
          error={numberError.status}
          size="small"
          fullWidth
          variant="outlined"
          type="text"
          label={numberError.message}
          value={number || ""}
          onChange={e => setNumber(e.target.value)}
        />

        <ButtonGroup>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpenRegisterForm(false)}
          >
            cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ color: "white" }}
            disableElevation
          >
            Start ordering
          </Button>
        </ButtonGroup>
      </form>
    </Paper>
  )
}

export default RegisterAddress
