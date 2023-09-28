import Cart from "./views/cart.js";

const cart = new Cart()
const navegation = document.querySelector('.nav-items')
const buttonBtn = document.querySelector('.delete')
const products = document.querySelector('.container-products')

// Funciones del carrito
const postProducts = (e) => {
  e.preventDefault()

  const product = {
    id: e.target.dataset.id,
    title: e.target.parentElement.parentElement.querySelector('h5').textContent,
    image: e.target.parentElement.parentElement.querySelector('img').src,
    price: e.target.parentElement.parentElement.querySelector('p span').textContent,
    count: 1
  }

  getProduct(product, e.target.dataset.id)
}

const getProduct = (product, id) => {
  cart.postProduct({ product, id })
}


// Acciones del las ventanas emergentes
const showDelivery = (e) => {
  const simulator = document.querySelector('.simulate-content')
  const body = document.querySelector('body')

  if (e.target.classList.contains('cta-address')) {
    e.preventDefault()
    simulator.classList.add('showSimulator')
    body.style.overflow = 'hidden'
  } else if (e.target.classList.contains('simulate-content')) {
    simulator.classList.remove('showSimulator')
    body.style.overflowY = 'scroll'
  }
}

const showNav = (e) => {
  const cartItems = document.querySelector('.cart-items')
  const body = document.querySelector('body')

  if (e.target.classList.contains('fa-bag-shopping')) {
    e.preventDefault()
    cartItems.classList.add('showCartItems')
    body.style.overflow = 'hidden'
  } else if (e.target.classList.contains('cart-items')) {
    cartItems.classList.remove('showCartItems')
    body.style.overflowY = 'scroll'
  } else if (e.target.classList.contains('fa-xmark')) {
    e.preventDefault()
    cartItems.classList.remove('showCartItems')
    body.style.overflowY = 'scroll'
  }
}

document.addEventListener('DOMContentLoaded', () => cart.renderProducs())

buttonBtn.addEventListener('click', (e) => {
  e.preventDefault()
  cart.cleanCart()
})


// Delegacion de evento.
navegation.addEventListener('click', (e) => {
  showNav(e)
  showDelivery(e)
})

products.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-product')) {
    postProducts(e)
  }
})