import React, { createContext, useReducer, useState, useContext } from "react"
import reducer from "../reducers/reducer"
const initialState = {
  totalItem: 0,
  totalPrice: 0,
}
const GlobalContext = createContext()
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, GlobalContext }
