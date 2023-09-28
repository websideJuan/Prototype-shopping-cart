import Carrito from "../js/carrito.js";

const carrito = new Carrito()

export default class Cart {
  postProduct ({ product, id }) {
    carrito.cretateProducts({ input: product, id })
    this.renderProducs()
  }

  renderProducs () {
    const products = carrito.getProducts()
    const renderCarrito = document.querySelector('.cart-render')
    const cartContent = document.querySelector('.cart-content')

    renderCarrito.innerHTML = ''
    products.forEach(product => {
      const row = document.createElement('tr')

      row.innerHTML = `
        <td>
          <img class="image-cart" src="${product.image}" alt="${product.title}"/>
        </td>
        <td>
          <h5>${product.title}</h5>
        </td>
        <td>
          <p>${product.price * product.count}</p>
        </td>
        <td>
          <p> x${product.count}</p>
        </td>
      `
      renderCarrito.appendChild(row)
    })

    cartContent.innerHTML = products.length
  }

  cleanCart () {
    carrito.deleteAllProducts()
    this.renderProducs()
  }
}