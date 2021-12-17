const mainDark = "#ef6c00"

const toolbar = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  columnGap: 1,
  alignItems: "center",
  justifyContent: "space-between",
}

const footerToolbar = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}
const subTitle = {
  textTransform: "capitalize",
  fontSize: { md: "40px", sm: "30px", xs: "25px" },
  transition: "all 1s ease-in",
  textAlign: { md: "left", sm: "center", xs: "center" },
}
const deliveryTitle = {
  width: "100%",
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  textTransform: "capitalize",
  fontSize: { md: "30px", sm: "20px", xs: "20px" },
  transition: "all 1s ease-in",
  textAlign: "center",
  zIndex: 1,
  marginTop: { md: "10px", sm: "5px", xs: "5px" },
}
const paper = {
  minHeight: "calc(100% - 80px)",
  margin: "auto",
  background: "transparent",
  border: `0.5px ${mainDark} ease-in`,
}
const loginButton = {
  width: "100%",
  size: { md: "large", sm: "small" },
}

export { toolbar, footerToolbar, subTitle, paper, loginButton, deliveryTitle }
