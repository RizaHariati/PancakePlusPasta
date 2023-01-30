import { v4 as uuidv4 } from "uuid"
import FindPrice from "../util/FindPrice"

export const reducer = (state, action) => {
  // ===========shopping list& menu=====================
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
      shoppingList?.map(item => {
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
      const newList = shoppingList?.filter(item => {
        const newlist = item.price.filter(a => a.amount !== 0)
        return newlist.length > 0
      })

      return {
        ...state,
        shoppingList: newList,
      }
    }
  }

  if (action.type === "GET_TOTAL") {
    if (state.shoppingList) {
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
    } else {
      return {
        ...state,
      }
    }
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      shoppingList: [],
    }
  }
  // ================== register && login=======================
  if (action.type === "MEMBER_LOGIN") {
    const memberList = state.memberList
    const email = action.payload.memberEmail
    const member = memberList.find(user => user.userData.email === email)
    const name = member.userData.name
    return {
      ...state,
      loginStatus: { login: true },
      user: member,
      alertMessage: `Login successful. Welcome ${name}!`,
      alerting: true,
      alertStatus: "success",
    }
  }

  if (action.type === "LOGOUT_USER") {
    return {
      ...state,
      shoppingList: [],
      loginStatus: { login: false },
      user: {},
      messageList: [],
      alertMessage: "You are logged out, data cleared",
      alerting: true,
      alertStatus: "success",
      messageNumber: 0,
      totalItem: 0,
      totalPrice: 0,
    }
  }

  if (action.type === "GUEST_LOGIN") {
    const newUser = action.payload

    return {
      ...state,
      loginStatus: { login: true },
      user: newUser,
      alertMessage: "You are logged in as guest",
      alerting: true,
      alertStatus: "success",
    }
  }

  if (action.type === "REGISTER") {
    const data = action.payload
    const id = uuidv4()
    const newData = { id, ...data }
    let list = []
    if (!state.memberList) {
      list = [newData]
    } else {
      list = [...state.memberList, newData]
    }
    return {
      ...state,
      memberList: list,
      registerSuccess: true,
      alertMessage: "Data is registered, please login",
      alerting: true,
      alertStatus: "success",
    }
  }

  if (action.type === "OPEN_ALERT") {
    return {
      ...state,
      alertMessage: action.payload.message,
      alerting: true,
      alertStatus: action.payload.status,
    }
  }

  if (action.type === "CLOSE_ALERT") {
    return {
      ...state,
      alertMessage: "",
      alerting: false,
      alertStatus: "info",
    }
  }

  if (action.type === "REMOVE_ACCOUNT") {
    const newMemberList = state.memberList.filter(
      member => member.userData.email !== action.payload
    )
    const findMember = state.memberList.find(
      member => member.userData.email === action.payload
    )
    const name = findMember.userData.name

    return {
      ...state,
      user: {},
      memberList: newMemberList,
      shoppingList: [],
      loginStatus: { login: false },
      alertMessage: `Sad to see you go! ${name}`,
      alerting: true,
      alertStatus: "info",
    }
  }

  // ========================checkout process==================
  if (action.type === "CHECK_OUT") {
    const { checkOut, itemsOut, customerOut } = action.payload

    return {
      ...state,
      checkout: { check: checkOut, items: itemsOut, customer: customerOut },
    }
  }

  if (action.type === "CANCEL_CHECK_OUT") {
    return {
      ...state,
      checkout: { check: false, items: [], customer: {} },
    }
  }
  if (action.type === "REDUCE_MESSAGE_NUMBER") {
    return {
      ...state,
      messageNumber: state.messageNumber > 0 ? state.messageNumber - 1 : 0,
    }
  }

  if (action.type === "CONFIRM_CHECK_OUT") {
    const id = uuidv4()
    const date = new Date()
    const newMessage = {
      status: false,
      id,
      items: state.checkout.items,
      customer: state.checkout.customer,
      total: state.totalPrice,
      date,
    }

    if (state.checkout.customer.userData.name === "guest") {
      return {
        ...state,
        checkout: { check: false, items: [], customer: {}, total: 0 },
        shoppingList: [],
        loginStatus: { login: false },
        user: {},
        messageList: [],
        alertMessage: "finish purcashing, thank you",
        alerting: true,
        alertStatus: "success",
        messageNumber: 0,
        totalItem: 0,
        totalPrice: 0,
      }
    }

    let messageArray

    if (!state.messageList) {
      messageArray = [newMessage]
    } else {
      messageArray = [...state.messageList, newMessage]
    }
    return {
      ...state,
      messageList: messageArray,
      messageNumber: state.messageNumber ? state.messageNumber + 1 : 1,
      checkout: { check: false, items: [], customer: {}, total: 0 },
      shoppingList: [],
      totalItem: 0,
      totalPrice: 0,
    }
  }

  return state
}
