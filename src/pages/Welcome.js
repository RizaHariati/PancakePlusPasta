import React, { useState } from "react"
import Layout from "../components/layout"
import Slides from "../components/Slides"
import "../styles/styles.css"
import { useGlobalContext } from "../context/GlobalContextProvider"
import WelcomeForm from "../components/WelcomeForm"
import GuestForm from "../components/GuestForm"
import LoginAsGuest from "../components/LoginAsGuest"
import RegisterForm from "../components/RegisterForm"

const Welcome = () => {
  const { loginStatus, user } = useGlobalContext()
  const [openGuestForm, setOpenGuestForm] = useState(false)
  const [openRegisterForm, setOpenRegisterForm] = useState(false)
  return (
    <Layout>
      <div className="content-container">
        <Slides />
        <div className="loginContainer">
          {!loginStatus && (
            <WelcomeForm
              setOpenGuestForm={setOpenGuestForm}
              setOpenRegisterForm={setOpenRegisterForm}
            />
          )}
          {loginStatus && user.name === "guest" && <LoginAsGuest />}
        </div>
      </div>
      <GuestForm
        openGuestForm={openGuestForm}
        setOpenGuestForm={setOpenGuestForm}
      />
      <RegisterForm
        openRegisterForm={openRegisterForm}
        setOpenRegisterForm={setOpenRegisterForm}
      />
    </Layout>
  )
}

export default Welcome
