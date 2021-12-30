import React, { useState } from "react"
import Footer from "./Footer"
import "../styles/styles.css"
import Navbar from "./Navbar"
import { useGlobalContext } from "../context/GlobalContextProvider"
import ShoppingList from "./navbar/ShoppingList"
import UserAccount from "./navbar/UserAccount"
import ConfirmOrder from "./navbar/ConfirmOrder"
import { Alert, Snackbar } from "@mui/material"

const Layout = ({ children }) => {
  const [showShoppingList, setShowShoppingList] = useState(false)
  const [showUserAccount, setShowUserAccount] = useState(false)

  const { alerting, alertStatus, alertMessage } = useGlobalContext()

  return (
    <div>
      <Navbar
        showShoppingList={showShoppingList}
        setShowShoppingList={setShowShoppingList}
        setShowUserAccount={setShowUserAccount}
        showUserAccount={showUserAccount}
      />
      <Snackbar
        open={alerting}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={alertStatus}>{alertMessage}</Alert>
      </Snackbar>
      <ShoppingList
        showShoppingList={showShoppingList}
        setShowShoppingList={setShowShoppingList}
      />

      <UserAccount
        showUserAccount={showUserAccount}
        setShowUserAccount={setShowUserAccount}
      />

      <ConfirmOrder />

      {children}
      <Footer />
    </div>
  )
}

export default Layout
