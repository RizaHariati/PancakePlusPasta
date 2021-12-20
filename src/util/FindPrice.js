const FindPrice = ({ price }) => {
  let priceArray = []
  price.forEach(item => {
    for (let a in item) {
      if (item[a]) {
        const thing = { name: a, price: item[a], amount: 0 }
        priceArray.push(thing)
      }
    }
  })

  return priceArray
}

export default FindPrice
