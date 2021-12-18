import React, { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../styles/styles.css"
import ShoppingList from "./ShoppingList"
const Layout = ({ children }) => {
  const [showList, setShowList] = useState(false)
  return (
    <div>
      <Navbar showList={showList} setShowList={setShowList} />
      <ShoppingList showList={showList} setShowList={setShowList} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
