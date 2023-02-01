import { Grid, Modal, Paper, Snackbar, Typography, Alert } from "@mui/material"
import { navigate } from "gatsby"
import React, { useState, useEffect } from "react"
import { useGlobalContext } from "../../context/GlobalContextProvider"
import {
  gridModalForm,
  gridModalMap,
  paperModal,
  gridModalContainer,
} from "../../styles/modalStyles"
import AddressData from "./AddressData"
import MapInput from "./MapInput"

const AddressForm = ({ openAddressForm, setOpenAddressForm }) => {
  const { register } = useGlobalContext()
  const [address, setAddress] = useState({
    inArea: "true",
    location: { Neighborhood: "", District: "", Region: "", Postal: "" },
  })
  const [openAlert, setOpenAlert] = useState(false)
  const handleStartOrdering = data => {
    setOpenAddressForm(false)
    register(data)
    if (data.userData.name === "guest") navigate("/Menu")
  }
  useEffect(() => {
    if (!address.inArea) {
      setOpenAlert(true)
      setTimeout(() => {
        setOpenAlert(false)
      }, 1500)
    }
  }, [address])
  return (
    <div>
      <Snackbar
        open={openAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Location is outside the delivery Address
        </Alert>
      </Snackbar>
      <Modal open={openAddressForm.status}>
        <Paper sx={paperModal}>
          <Grid container sx={gridModalContainer}>
            <Grid item md={7} xs={12} sx={gridModalForm}>
              <AddressData
                handleStartOrdering={handleStartOrdering}
                openAddressForm={openAddressForm}
                setOpenAddressForm={setOpenAddressForm}
                address={address}
              />
            </Grid>
            <Grid item md={5} xs={12} sx={gridModalMap}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper
                    variant="outlined"
                    sx={{ height: "100px", padding: "10px" }}
                  >
                    <Typography variant="body2" color="textInfo">
                      To ensure that you receive warm meals, our delivery zone
                      is based on delivery journey time, please pick an address
                      within the area cirlced area
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper variant="outlined" sx={{ padding: "10px" }}>
                    <MapInput setAddress={setAddress} address={address} />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default AddressForm
