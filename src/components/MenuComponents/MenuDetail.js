import { Cancel } from "@mui/icons-material"
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { useGlobalContext } from "../../context/GlobalContextProvider"
import {
  modalBase,
  modalBtn,
  modalContainer,
  modalImage,
} from "../../styles/modalStyles"

const MenuDetail = () => {
  const {
    showModal: { image, description, status },
    closeModal,
  } = useGlobalContext()
  return (
    <Modal open={status} sx={modalBase}>
      <Box sx={modalContainer}>
        <IconButton onClick={() => closeModal()} sx={modalBtn}>
          <Cancel color="error" />
        </IconButton>
        <Paper sx={modalImage}>
          {image && (
            <GatsbyImage
              image={getImage(image)}
              alt={description["description"].split(" ")[0]}
              objectPosition="top"
              objectFit="cover"
              style={{ height: "100%" }}
            />
          )}
        </Paper>
        <div className="modal-info">
          <Typography variant="body2" color="textInfo">
            {description?.description}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginLeft: "auto" }}
            width={100}
            onClick={() => closeModal()}
          >
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  )
}

export default MenuDetail
