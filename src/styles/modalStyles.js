const paperModal = {
  position: "absolute",
  top: { md: "50%", xs: "0%" },
  left: "50%",
  transform: { md: "translate(-50%, -50%)", xs: "translate(-50%, 0%)" },
  width: { md: "80vw", xs: "100vw" },
  height: { md: "80vh", xs: "100vh" },
  overflowY: { md: "none", xs: "scroll" },
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
  padding: "10px",
  width: "100%",
  marginRight: { md: "15px", xs: "0px" },
  marginTop: { md: "0px", xs: "15px" },
  height: "calc(80vh - 40px)",
}
export {
  paperModal,
  gridModalForm,
  gridModalMap,
  gridModalContainer,
  paperForm,
}
