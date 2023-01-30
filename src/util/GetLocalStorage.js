const windowGlobal = typeof window !== "undefined" && window
const localStorage = windowGlobal.localStorage
const getshoppinglist = () => {
  try {
    const shoppingList = JSON.parse(localStorage?.getItem("shoppingList"))
    if (shoppingList) return shoppingList
  } catch (error) {
    return []
  }
}

const getuserList = () => {
  try {
    const userList = JSON.parse(localStorage?.getItem("memberList"))

    if (userList) {
      return userList
    }
  } catch (error) {
    return []
  }
}
const getuser = () => {
  try {
    const user = JSON.parse(localStorage?.getItem("user"))
    if (user) {
      return user
    }
  } catch (error) {
    return {}
  }
}
const getloginStatus = () => {
  try {
    let loginStatus = JSON.parse(localStorage?.getItem("loginStatus"))
    if (loginStatus) return loginStatus
  } catch (error) {
    return { login: false }
  }
}

const getloginCheckOut = () => {
  try {
    let checkout = JSON.parse(localStorage?.getItem("checkout"))
    if (checkout) return checkout
  } catch (error) {
    return { check: false, items: [], customer: {} }
  }
}
const getmessageList = () => {
  try {
    let messageList = JSON.parse(localStorage.getItem("messageList"))
    if (messageList) return messageList
  } catch (error) {
    return []
  }
}
const getMessageNumber = () => {
  try {
    let messageNumber = JSON.parse(localStorage.getItem("messageNumber"))
    if (messageNumber) return messageNumber
  } catch (error) {
    return 0
  }
}
export {
  getshoppinglist,
  getuserList,
  getuser,
  getloginStatus,
  getloginCheckOut,
  getmessageList,
  getMessageNumber,
}
