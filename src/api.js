const _prices = {
  1: {
    1: 9,
    2: 25,
    3: 49,
    4: 99
  },
  2: {
    1: 1,
    2: 14,
    3: 29,
    4: 59
  },
  3: {
    1: 1,
    2: 10,
    3: 100,
    4: 1000
  }
}

export default {
  preview (configuration) {
    return new Promise(function(resolve, reject) {
      configuration.products.forEach(function(product) {
        let newCost = _prices[product.id][product.planId]
        product.cost = newCost * product.quantity
      })
      resolve(configuration)
    })
  }
}
