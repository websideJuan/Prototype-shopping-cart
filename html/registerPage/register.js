import Register from '../../js/register.js'
import PopUp from '../../js/popUp.js'

const register = new Register()
const popUp = new PopUp()
const buttonSubmit = document.querySelector('.btn-createUser')

const handlerChange = (e) => {
  e.preventDefault()
  handlerSubmit(e.target.parentElement)
}

const handlerSubmit = (formContainer) => {
  const politicas = formContainer.querySelector('.user-policies input').checked
  const userEmail = formContainer.querySelector('.user-email input').value

  if (!politicas) {
    return popUp.renderPopUps('danger', { message: 'Tienes que aceptar nuestras politicas' } )
  }

  const newUser = {
    UUID: 1,
    userName: formContainer.querySelector('.user-name input').value,
    userPassword: formContainer.querySelector('.user-password input').value,
    userEmail: userEmail
  }

  const result = register.postUser({ input: newUser, email: userEmail })
  popUp.renderPopUps(result.type, result.options)
}



buttonSubmit.addEventListener('click', (e) => handlerChange(e))