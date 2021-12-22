import React, { useState } from "react"
import Layout from "../components/layout"
import Slides from "../components/Slides"
import "../styles/styles.css"
import { useGlobalContext } from "../context/GlobalContextProvider"
import WelcomeNoLogin from "../components/WelcomeNoLogin"
import GuestForm from "../components/GuestForm"

const Welcome = () => {
  const { loginStatus } = useGlobalContext()
  const [openGuestForm, setOpenGuestForm] = useState(false)
  const [openRegisterForm, setOpenRegisterForm] = useState(false)
  return (
    <Layout>
      <div className="content-container">
        <Slides />
        <div className="loginContainer">
          {!loginStatus && (
            <WelcomeNoLogin
              setOpenGuestForm={setOpenGuestForm}
              setOpenRegisterForm={setOpenRegisterForm}
            />
          )}
        </div>
      </div>
      <GuestForm
        openGuestForm={openGuestForm}
        setOpenGuestForm={setOpenGuestForm}
      />
    </Layout>
  )
}

export default Welcome
