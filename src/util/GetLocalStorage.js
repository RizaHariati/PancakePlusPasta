const getshoppinglist = () => {
  try {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList"))
    if (shoppingList) return shoppingList
  } catch (error) {
    console.log(error)
  }
  return []
}

const getuserList = () => {
  try {
    const userList = JSON.parse(localStorage.getItem("memberList"))
    if (userList) return userList
  } catch (error) {
    console.log(error)
  }
  return null
}
const getuser = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) return user
  } catch (error) {
    console.log(error)
  }
  return {}
}
const getloginStatus = () => {
  try {
    let loginStatus = JSON.parse(localStorage.getItem("loginStatus"))
    if (loginStatus) return loginStatus
  } catch (error) {
    console.log(error)
  }
  return { login: false }
}

export { getshoppinglist, getuserList, getuser, getloginStatus }
