import React, { useState } from "react"
import Layout from "../components/layout"
import Slides from "../components/Slides"
import "../styles/styles.css"
import { useGlobalContext } from "../context/GlobalContextProvider"
import WelcomeForm from "../components/WelcomeForm"
import AddressForm from "../components/AddressForm"
import LoginAsGuest from "../components/LoginAsGuest"
import RegisterForm from "../components/RegisterForm"

const Welcome = () => {
  const { loginStatus, user } = useGlobalContext()
  const [openAddressForm, setOpenAddressForm] = useState({
    status: false,
    userData: {
      name: "guest",
      email: "default",
      password: "default",
    },
  })
  const [openRegisterForm, setOpenRegisterForm] = useState(false)

  return (
    <Layout>
      <div className="content-container">
        <Slides />
        <div className="loginContainer">
          {!loginStatus.login && (
            <WelcomeForm
              setOpenAddressForm={setOpenAddressForm}
              setOpenRegisterForm={setOpenRegisterForm}
            />
          )}
          {loginStatus.login && user.userData.name === "guest" && (
            <LoginAsGuest />
          )}
        </div>
      </div>
      <AddressForm
        openAddressForm={openAddressForm}
        setOpenAddressForm={setOpenAddressForm}
      />
      <RegisterForm
        openRegisterForm={openRegisterForm}
        setOpenRegisterForm={setOpenRegisterForm}
        setOpenAddressForm={setOpenAddressForm}
      />
    </Layout>
  )
}

export default Welcome
