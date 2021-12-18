const FindPrice = ({ price }) => {
  let priceArray = []
  price.forEach(item => {
    for (let a in item) {
      if (item[a]) {
        const thing = { name: a, price: item[a] }
        priceArray.push(thing)
      }
    }
  })

  return priceArray
}

export default FindPrice
