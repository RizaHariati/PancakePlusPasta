import React, { createContext, useReducer, useContext, useEffect } from "react"
import { reducer } from "../reducers/reducer"
import { graphql, useStaticQuery } from "gatsby"
import {
  getshoppinglist,
  getuserList,
  getuser,
  getloginStatus,
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
  editList: false,
  loginStatus: getloginStatus(),
  registerSuccess: false,
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
    const saveCart = (shoppingList, user, memberList, loginStatus) => {
      localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
      localStorage.setItem("memberList", JSON.stringify(memberList))
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("loginStatus", JSON.stringify(loginStatus))
    }

    saveCart(
      state.shoppingList,
      state.user,
      state.memberList,
      state.loginStatus
    )
    // eslint-disable-next-line
  }, [state.shoppingList, state.user, state.memberList, state.loginStatus])

  const editList = (id, nameItem, amount, price) => {
    dispatch({
      type: "EDIT_SHOPPING_LIST",
      payload: { id, nameItem, amount, price },
    })
  }
  const register = data => {
    if (data.userData.name === "guest") {
      return dispatch({
        type: "GUEST_LOGIN",
        payload: data,
      })
    }
    if (!state.memberList) {
      dispatch({
        type: "REGISTER",
        payload: data,
      })
    } else {
      dispatch({
        type: "SCREEN_MEMBER",
        payload: data,
      })
    }
  }
  const newGuest = () => {
    dispatch({ type: "CLEAR_CART" })
    dispatch({ type: "GUEST_OUT" })
  }
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        editList,
        register,
        newGuest,
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
