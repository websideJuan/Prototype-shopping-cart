export default class Register {
  constructor () {
    this.users = []
  }

  getUsers () {
    return this.users = this.users.length !== 0 ? JSON.parse(localStorage.getItem('Users')) : this.users
  }

  updateUsers (users) {
    localStorage.setItem('Users', JSON.stringify(users))
  }

  postUser ({ input, email }) {
    const users = this.getUsers()
    const emailExist = users.find(user => user.userEmail === email)

    if (emailExist) {
      return { type: 'danger', options: { message: 'El email ya existe' } }
    }

    this.users.push(input)
    this.updateUsers(users)

    setTimeout(() => {
      location.replace('../../index.html')
    }, 2000)
    return { type: 'success', options: { message: 'User create success' } }
  }
}