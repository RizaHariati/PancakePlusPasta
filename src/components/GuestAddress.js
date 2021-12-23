import {
  Button,
  ButtonGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import React, { useState, useEffect } from "react"
import { paperForm } from "../styles/modalStyles"

const GuestAddress = ({ handleStartOrdering, setOpenGuestForm, address }) => {
  const [addressValue, setAddressValue] = useState("")
  const [addressValueError, setAddressValueError] = useState({
    status: false,
    message: "Location is out of our delivery area",
  })
  const [phone, setPhone] = useState()
  const [phoneError, setPhoneError] = useState({
    status: false,
    message: "phone number",
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
    if (!phone || phone.length < 11 || phone.length > 13) {
      return setPhoneError({
        status: true,
        message: "phone number is not valid",
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
    if (phone && addressValue && street && number) {
      console.log(phone.toString())
      const fullData = {
        name: "guest",
        email: "default",
        password: "default",
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
    <Paper variant="outlined" sx={paperForm}>
      <Typography>Please fill in your phone and Address</Typography>
      <form noValidate className="guest-loginForm" onSubmit={handleSubmit}>
        <TextField
          min={0}
          error={phoneError.status}
          size="small"
          fullWidth
          variant="outlined"
          type="number"
          value={phone || ""}
          label={phoneError.message}
          placeholder="Phone number"
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
          placeholder="Pick location from the map"
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
          placeholder="street name"
          onChange={e => setStreet(e.target.value)}
        />
        <TextField
          error={numberError.status}
          size="small"
          fullWidth
          variant="outlined"
          type="text"
          label={numberError.message}
          placeholder="Address detail (number/floor/block)"
          value={number || ""}
          onChange={e => setNumber(e.target.value)}
        />

        <ButtonGroup>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpenGuestForm(false)}
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

export default GuestAddress
