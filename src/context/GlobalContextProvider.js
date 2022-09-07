import React, { createContext, useReducer, useContext, useEffect } from "react"
import { reducer } from "../reducers/reducer"
import { graphql, useStaticQuery } from "gatsby"
import {
  getshoppinglist,
  getuserList,
  getuser,
  getloginStatus,
  getloginCheckOut,
  getmessageList,
} from "../util/GetLocalStorage"

const request = graphql`
  query getBlankMenu {
    allContentfulPancakeMenu(filter: { type: { nin: "delivery" } }) {
      nodes {
        title
        type
        url
        price {
          price {
            _2_piece
            _3_piece
            _5_piece
            coca_cola
            fanta
            cup
            large
            regular
            sprite
            item
          }
        }
        image {
          gatsbyImageData(
            aspectRatio: 1.5
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
          )
        }
        id
        description {
          description
        }
      }
    }
  }
`
const initialState = {
  mainData: [],
  user: getuser(),
  memberList: getuserList(),
  shoppingList: getshoppinglist(),
  totalItem: 0,
  totalPrice: 0,
  loginStatus: getloginStatus(),
  alertMessage: "",
  registerSuccess: false,
  alerting: false,
  alertStatus: "info",
  checkout: getloginCheckOut(),
  messageList: getmessageList(),
}
const GlobalContext = createContext()
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const data = useStaticQuery(request)

  useEffect(() => {
    dispatch({ type: "GET_DATA", payload: data })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" })
  }, [state.shoppingList])

  useEffect(() => {
    const saveCart = (
      shoppingList,
      user,
      memberList,
      loginStatus,
      checkout,
      messageList
    ) => {
      localStorage?.setItem("shoppingList", JSON.stringify(shoppingList))
      localStorage?.setItem("memberList", JSON.stringify(memberList))
      localStorage?.setItem("user", JSON.stringify(user))
      localStorage?.setItem("loginStatus", JSON.stringify(loginStatus))
      localStorage?.setItem("checkout", JSON.stringify(checkout))
      localStorage?.setItem("messageList", JSON.stringify(messageList))
    }

    saveCart(
      state.shoppingList,
      state.user,
      state.memberList,
      state.loginStatus,
      state.checkout,
      state.messageList
    )
    // eslint-disable-next-line
  }, [
    state.shoppingList,
    state.user,
    state.memberList,
    state.loginStatus,
    state.checkout,
    state.messageList,
  ])

  // =================useEffect for Alert Login============

  useEffect(() => {
    const timer1 = setTimeout(() => {
      dispatch({ type: "CLOSE_ALERT" })
    }, 3000)
    return () => {
      clearTimeout(timer1)
    }
  }, [state.alerting])

  const editList = (id, nameItem, amount, price) => {
    dispatch({
      type: "EDIT_SHOPPING_LIST",
      payload: { id, nameItem, amount, price },
    })
  }

  const openAlert = (status, message) => {
    dispatch({
      type: "OPEN_ALERT",
      payload: { status, message },
    })
  }

  const register = data => {
    if (data.userData.name === "guest") {
      return dispatch({
        type: "GUEST_LOGIN",
        payload: data,
      })
    }

    dispatch({
      type: "REGISTER",
      payload: data,
    })
  }

  const loginMember = memberEmail => {
    dispatch({
      type: "MEMBER_LOGIN",
      payload: { memberEmail },
    })
  }
  const logoutUser = () => {
    dispatch({ type: "LOGOUT_USER" })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }
  const confirming = (checkOut, itemsOut, customerOut) => {
    dispatch({
      type: "CHECK_OUT",
      payload: { checkOut, itemsOut, customerOut },
    })
  }
  const cancelCheckout = () => {
    dispatch({
      type: "CANCEL_CHECK_OUT",
    })
  }

  const confirmCheckout = () => {
    dispatch({
      type: "CONFIRM_CHECK_OUT",
    })
  }

  const removeAccount = email => {
    dispatch({
      type: "REMOVE_ACCOUNT",
      payload: email,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        editList,
        register,
        logoutUser,
        loginMember,
        openAlert,
        clearCart,
        confirming,
        cancelCheckout,
        confirmCheckout,
        removeAccount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, GlobalContext }
