const container = {
  width: "100%",
  height: "calc(100vh - 60px)",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  paddingBlock: "20px",
}
const paper = {
  height: "100%",
  width: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  background: "transparent",
  rowGap: "17px",
  padding: "20px",
  overflowY: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}
const lineBtn = {
  width: "100%",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "10px",
}
const modalBtn = {
  position: "absolute",
  top: 0,
  right: 0,
}
const boxContainer = {
  position: "relative",
  width: { sm: "600px", xs: "100vw" },
  height: { sm: "90%", xs: "100vh" },
  background: "white",
  margin: "auto",
  marginTop: { sm: "50px", xs: "0px" },
  padding: "20px",
  paddingTop: "50px",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  overflowY: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}
export { container, paper, lineBtn, modalBtn, boxContainer }
