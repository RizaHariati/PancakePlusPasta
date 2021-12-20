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
  if (action.type === "EDIT_LIST") {
    const shoppingList = state.shoppingList
    let newShoppingList = []
    let newTotalItem = 0

    const { id, nameItem, amount, price } = action.payload
    if (amount > 0) {
      const meal = state.mainData.find(data => data.id === id)
      const { title, image, price } = meal
      const newPrice = price.map(item => {
        if (item.name === nameItem) {
          newTotalItem = amount - item.amount
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
        totalItem: state.totalItem + newTotalItem,
      }
    } else {
      let zeroAmount = 0
      shoppingList.map(item => {
        if (item.id === id) {
          item.price.map(num => {
            if (num.name === nameItem) {
              zeroAmount = -1
              num.amount = 0
            }
            return item
          })
        }
      })
      console.log(zeroAmount)
      const newList = shoppingList.filter(item => {
        const newlist = item.price.filter(a => a.amount != 0)
        return newlist.length > 0
      })

      return {
        ...state,
        shoppingList: newList,
        totalItem: state.totalItem + zeroAmount,
      }
    }
  }
  return state
}
