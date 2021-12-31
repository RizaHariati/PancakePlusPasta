import React, { useState } from "react"
import Layout from "../components/layout"
import Slides from "../components/Slides"
import "../styles/styles.css"
import { useGlobalContext } from "../context/GlobalContextProvider"
import WelcomeForm from "../components/WelcomeComponents/WelcomeForm"
import RegisterForm from "../components/register/RegisterForm"
import AddressForm from "../components/register/AddressForm"
import LoginAsMember from "../components/WelcomeComponents/LoginAsMember"
import LoginAsGuest from "../components/WelcomeComponents/LoginAsGuest"
import Seo from "../components/Seo"

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
      <Seo title="Welcome" description="You can login as guest or as member" />
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
            <LoginAsGuest setOpenRegisterForm={setOpenRegisterForm} />
          )}
          {loginStatus.login && user.userData.name !== "guest" && (
            <LoginAsMember />
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
