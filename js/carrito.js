import PopUps from "./popUp.js";

const popUp = new PopUps()

export default class Carrito {
  getProducts () {
    let result
    result = JSON.parse(localStorage.getItem('products')) || []
    return result
  }

  cretateProducts ({ input, id }) {
    const products = this.getProducts()
    const findProduct = products.findIndex(product => product.id === id)

    if (findProduct !== -1) {
      products[findProduct].count = products[findProduct].count + 1
    } else {
      products.push(input)
    }

    this.updateProducts(products)
    popUp.renderPopUps('success', { message: 'Product added' })
  }

  deleteAllProducts () {
    const products = this.getProducts()

    if (products.length === 0) {
      return popUp.renderPopUps('danger', { message: 'The cart is empty' })
    }

    localStorage.clear()
    popUp.renderPopUps('success', { message: 'Cart clean success' })
  }

  deleteProduct ({ id }) {
    const products = this.getProducts()
    const findProduct = products.findIndex(product => product.id === id)

    if (findProduct !== -1) {
      return popUp.renderPopUps('danger', { message: 'Product not found' })
    }

    products.splice(findProduct, 1)
    this.updateProducts(products)
  }

  updateProducts (products) {
    localStorage.setItem('products', JSON.stringify(products))
  }
}