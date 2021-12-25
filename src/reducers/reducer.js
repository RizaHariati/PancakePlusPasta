import { decryptItem } from "../util/EncryptionHandler"
import { v4 as uuidv4 } from "uuid"
import FindPrice from "../util/FindPrice"

export const reducer = (state, action) => {
  if (action.type === "GET_DATA") {
    const data = action.payload.allContentfulPancakeMenu.nodes
    let newData = []
    data.map(item => {
      const { id, type, title, url, image, price, description } = item
      const menuImage = image.gatsbyImageData
      const itemPrice = FindPrice(price)
      const array = {
        id,
        type,
        title,
        url,
        image: menuImage,
        price: itemPrice,
        description,
      }
      return (newData = [...newData, array])
    })

    return {
      ...state,
      mainData: newData,
    }
  }
  if (action.type === "EDIT_SHOPPING_LIST") {
    const shoppingList = state.shoppingList
    let newShoppingList = []

    const { id, nameItem, amount } = action.payload
    if (amount > 0) {
      const meal = state.mainData.find(data => data.id === id)
      const { title, image, price } = meal
      const newPrice = price.map(item => {
        if (item.name === nameItem) {
          item.amount = amount
        }
        return item
      })

      const listItem = { id, title, image, price: newPrice }
      if (!shoppingList) {
        newShoppingList = [listItem]
      } else {
        const findItem = shoppingList.find(item => item.id === id)
        if (!findItem) {
          newShoppingList = [...shoppingList, listItem]
        } else {
          newShoppingList = shoppingList.map(item => {
            if (item.id === id) {
              item.price = newPrice
              return item
            }
            return item
          })
        }
      }
      return {
        ...state,
        shoppingList: newShoppingList,
      }
    } else {
      shoppingList.map(item => {
        if (item.id === id) {
          item.price.map(num => {
            if (num.name === nameItem) {
              num.amount = 0
            }
            return item
          })
        }
        return item
      })
      const newList = shoppingList.filter(item => {
        const newlist = item.price.filter(a => a.amount !== 0)
        return newlist.length > 0
      })

      return {
        ...state,
        shoppingList: newList,
      }
    }
  }
  if (action.type === "GUEST_LOGIN") {
    const newUser = action.payload

    return {
      ...state,
      loginStatus: { login: true },
      user: newUser,
    }
  }
  if (action.type === "REGISTER") {
    const data = action.payload
    const id = uuidv4()
    return {
      ...state,
      memberList: [{ id, ...data }],
      registerSuccess: true,
    }
  }
  if (action.type === "SCREEN_MEMBER") {
    const data = action.payload
    const email = data.userData.email
    console.log(email)
    const list = state.memberList
    const findEmail = list.find(user => user.userData.email === email)
    if (!findEmail) {
      const id = uuidv4()
      const newData = { id, ...data }
      return {
        ...state,
        memberList: [...state.memberList, newData],
        registerSuccess: true,
      }
    } else {
      console.log(findEmail)
      return {
        ...state,
        editList: true,
      }
    }
  }
  if (action.type === "GET_TOTAL") {
    const reducer = state.shoppingList.reduce(
      (total, item) => {
        const eachItem = item.price.reduce(
          (totalPrice, totalItem) => {
            totalPrice.price += totalItem.price * totalItem.amount
            totalPrice.amount += totalItem.amount
            return totalPrice
          },
          { price: 0, amount: 0 }
        )
        total.amount += eachItem.amount
        total.price += eachItem.price
        return total
      },
      { price: 0, amount: 0 }
    )

    return {
      ...state,
      totalItem: reducer.amount,
      totalPrice: reducer.price,
    }
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      shoppingList: [],
      totalItem: 0,
      totalPrice: 0,
    }
  }
  if (action.type === "GUEST_OUT") {
    return {
      ...state,
      loginStatus: { login: false },
      user: {},
    }
  }
  return state
}
