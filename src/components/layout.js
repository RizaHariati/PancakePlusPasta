import React, { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../styles/styles.css"
import ShoppingList from "./ShoppingList"
import UserAccount from "./UserAccount"
const Layout = ({ children }) => {
  const [showList, setShowList] = useState(false)
  const [showUserAccount, setShowUserAccount] = useState(false)
  return (
    <div>
      <Navbar
        showList={showList}
        setShowList={setShowList}
        showUserAccount={showUserAccount}
        setShowUserAccount={setShowUserAccount}
      />
      <ShoppingList showList={showList} setShowList={setShowList} />
      <UserAccount
        showUserAccount={showUserAccount}
        setShowUserAccount={setShowUserAccount}
      />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
