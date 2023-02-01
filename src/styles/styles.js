const mainDark = "#729384"
const mainLight = "#EFEDE0"
// =====================layout=======================
const toolbar = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  columnGap: 1,
  alignItems: "center",
  justifyContent: "space-between",
}

const iconImage = {
  width: "25%",
  height: "auto",
  marginHorizontal: "auto",
  borderRadius: "5px",
}
const footerToolbar = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: { md: "left", sm: "center", xs: "center" },
}
const subTitle = {
  textTransform: "capitalize",
  fontSize: { md: "40px", sm: "30px", xs: "24px" },
  width: "35%",
  transition: "all 1s ease-in",
  textAlign: { md: "left", sm: "center", xs: "center" },
}
const deliveryTitle = {
  width: "100%",
  position: "absolute",
  top: { md: "10px", xs: "0px" },
  left: "50%",
  transform: "translateX(-50%)",
  textTransform: "capitalize",
  fontSize: { md: "30px", sm: "20px", xs: "20px" },
  transition: "all 1s ease-in",
  textAlign: "center",
  zIndex: 1,
  marginTop: { md: "10px", sm: "5px", xs: "5px" },
}
const slider = {
  height: "100%",
  position: "relative",
  marginInline: "auto",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const paper = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: { xs: "start", sm: "center" },
  borderColor: "transparent",
  padding: { xs: "20px", sm: "30px", md: "40px", lg: "10px", xl: "40px" },
  border: `0.5px ${mainDark} ease-in`,
  backgroundColor: mainLight,
  rowGap: { xs: "5px", sm: "8px", md: "3px", lg: "8px", xl: "10px" },
}
const loginButton = {
  width: "100%",
  size: { md: "large", sm: "small" },
  color: "white",
}
// =====================Menu=======================

const container = {
  width: "100%",
  minHeight: "calc(100vh - 60px)",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  paddingBlock: "20px",
}
const card = {
  width: "220px",
  margin: "auto",
}
const cardActions = {
  minHeight: "100px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

// ====================box======================
export const avatar = {
  height: { xs: "35px", md: "40px" },
  width: { xs: "35px", md: "40px" },
  marginLeft: { xs: "-10px", md: "5px" },
}
const boxContainer = {
  position: "relative",
  width: { sm: "400px", xs: "100vw" },
  height: { sm: "100%", xs: "100vh" },
  background: "white",
  margin: "auto",
  padding: "20px",
  paddingTop: "50px",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
}
const modalBtn = {
  position: "absolute",
  top: 0,
  right: 0,
}
const shoppingPaper = {
  height: "calc(100% - 80px)",
  overflowY: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
}
const success = {
  position: "relative",
  height: { md: "400px", xs: "100%" },
  width: { md: "600px", xs: "100%" },
  margin: "auto",
  marginTop: { md: "70px", xs: "0" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
}
export {
  container,
  toolbar,
  footerToolbar,
  subTitle,
  paper,
  loginButton,
  deliveryTitle,
  card,
  cardActions,
  boxContainer,
  modalBtn,
  shoppingPaper,
  success,
  iconImage,
  slider,
}
