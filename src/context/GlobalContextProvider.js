import React, { createContext, useReducer, useContext, useEffect } from "react"
import { reducer } from "../reducers/reducer"
import { graphql, useStaticQuery } from "gatsby"

// const getCart = () => {
//   try {
//     const cart = JSON.parse(localStorage.getItem("cart"))
//     if (cart) return cart
//   } catch (error) {
//     console.log(error)
//   }
//   return []
// }
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
  user: { phoneID: 0, name: "", email: "", password: "", address: {} },
  userList: [],
  shoppingList: [],
  totalItem: 0,
  totalPrice: 0,
  loginStatus: false,
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
    const saveCart = (cart, user) => {
      localStorage.setItem("cart", JSON.stringify(cart))
      localStorage.setItem("userList", JSON.stringify(user))
    }

    saveCart(state.mainData, state.userList)
  }, [state.shoppingList, state.userList])

  const editList = (id, nameItem, amount, price) => {
    dispatch({
      type: "EDIT_LIST",
      payload: { id, nameItem, amount, price },
    })
  }
  const register = () => {
    dispatch({
      type: "REGISTER",
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        editList,
        register,
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
