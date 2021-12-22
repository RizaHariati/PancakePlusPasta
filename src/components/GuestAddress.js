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
  useEffect(() => {
    setAddressValue("")
    if (address.inArea) {
      const { Neighborhood, District, Region, Postal } = address.location
      setAddressValue(`${Neighborhood},${District},${Region},${Postal}`)
    } else setAddressValue("")
  }, [address])
  return (
    <Paper variant="outlined" sx={paperForm}>
      <Typography>Please fill in your phone and Address</Typography>
      <form noValidate className="guest-loginForm">
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          type="number"
          label="Phone number"
          placeholder="Phone number"
          //   style={{ backgroundColor: "white", borderRadius: "5px" }}
        />
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          label="Street Name"
          type="text"
          placeholder="Street Name"
          //   style={{ backgroundColor: "white", borderRadius: "5px" }}
        />
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          type="text"
          label="Address number/floor/block"
          placeholder="Address number/floor/block"
          //   style={{ backgroundColor: "white", borderRadius: "5px" }}
        />
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          type="text"
          value={addressValue}
          label="Pick Location within delivery area"
          placeholder="Pick location from the map"
          //   style={{ backgroundColor: "white", borderRadius: "5px" }}
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
            variant="contained"
            color="primary"
            style={{ color: "white" }}
            onClick={handleStartOrdering}
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
