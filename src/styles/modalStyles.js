const paperModal = {
  position: "absolute",
  top: { md: "50%", xs: "0%" },
  left: "50%",
  transform: { md: "translate(-50%, -50%)", xs: "translate(-50%, 0%)" },
  width: { md: "80vw", xs: "100vw" },
  height: { md: "80vh", xs: "100vh" },
  overflowY: { md: "auto", xs: "scroll" },
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}
const gridModalContainer = { padding: "20px" }

const gridModalForm = {
  width: "100%",
  height: "100%",

  order: { md: 1, xs: 2 },
}
const gridModalMap = {
  width: "100%",
  height: "100%",
  order: { md: 2, xs: 1 },
}
const paperForm = {
  width: "100%",
  marginRight: { md: "15px", xs: "0px" },
  marginTop: { md: "0px", xs: "15px" },
  height: { md: "calc(80vh - 40px)", xs: "100%" },
}
const paperForm2 = {
  width: "100%",
  marginRight: { md: "15px", xs: "0px" },
  marginTop: { md: "0px", xs: "15px" },
  height: { md: "calc(80vh - 40px)", xs: "100%" },
  padding: "10px",
}
const confirmText = {
  textTransform: "capitalize",
  paddingLeft: "44px",
  letterSpacing: "1px",
}

const modalContainer = {
  position: "relative",
  width: "90%",
  maxWidth: "700px",
  height: "fit",
  background: "white",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  borderRadius: "5px",
}

const modalImage = {
  width: "100%",
  aspectRatio: { xs: "1.3", sm: "2" },
}
const modalBase = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const modalBtn = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 3,
  mixBlendMode: "difference",
}
export {
  paperModal,
  gridModalForm,
  gridModalMap,
  gridModalContainer,
  paperForm,
  paperForm2,
  confirmText,
  modalContainer,
  modalBase,
  modalBtn,
  modalImage,
}
