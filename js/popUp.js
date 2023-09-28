export default class PopUps {
  constructor () {
    this.body = document.querySelector('body')
  }

  createdPopUp (type, options) {
    let popUps

    if (type === 'success') {

      popUps = {
        message: options.message,
        color: 'green',
        icon: 'fa-regular fa-circle-check'
      }
      return popUps
    } else if (type === 'danger') {

      popUps = {
        message: options.message,
        color: 'red',
        icon: 'fa-solid fa-circle-exclamation'
      }
      return popUps
    } else {
      popUps = {
        message: 'not found'
      }

      return popUps
    }
  }

  renderPopUps (type, options, autoDelete = false) {
    const popUps = document.createElement('div')
    const popUp = this.createdPopUp(type, options)

    popUps.className = 'popUp-absolute'
    popUps.innerHTML = `
      <div class="popUp">

        <div class="popUp-header ${popUp.color}">
          <h5> ${type} </h5>
        </div>

        <div class="popUp-body ${popUp.color}">
          <i class="${popUp.icon}"></i>
          <p>${popUp.message}</p>
        </div>
        
        <div class="popUp-footer">
          <button class="btn-success" data-success="1">Ok</button>
        </div>

      </div>
    `
    this.body.appendChild(popUps)

    console.log(autoDelete)
    console.log(autoDelete === false)
    if (autoDelete === false) {
      this.autoDelete()
    } else {
      this.deletedPopUps()
    }
  }

  deletedPopUps () {
    const btn = this.body.childNodes[9].querySelector('.btn-success')

    btn.addEventListener('click', () => {
      const popUpAbsolute = this.body.childNodes[9]
      popUpAbsolute.remove()
    })
  }

  autoDelete () {
    const popUpAbsolute = this.body.querySelector('.popUp-absolute')

    setTimeout(() => {
      popUpAbsolute.remove()
    }, 2000);
  }
}