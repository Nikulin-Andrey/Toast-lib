import {
  renderToasts,
  getToastComponents,
  deleteToastEvent,
} from '@/helpers/toastEvents'

class Toasts {
  constructor() {
    if (typeof Toasts.instance === 'object') {
      return Toasts.instance
    }
    this.toasts = []
    Toasts.instance = this
    return this
  }

  setContainer(container) {
    this.container = document.getElementById(
      'toastContainer',
    )
  }

  addToast({
    type = 'info',
    size = 'md',
    heading,
    description,
    color,
    textColor,
    id,
    lifeTime,
  }) {
    this.toasts.push({
      type,
      size,
      heading,
      description,
      color,
      textColor,
      id: id,
      timerId: setTimeout(
        () => deleteToastEvent(id, 'time'),
        lifeTime,
      ),
    })
    renderToasts(
      getToastComponents(this.toasts),
      this.container,
    )
  }

  deleteToast(id, typeOfDelete) {
    const index = this.toasts.findIndex(
      (toast) => toast.id === id,
    )
    const deleted = this.toasts.splice(index, 1)
    if (typeOfDelete === 'click') {
      clearTimeout(deleted[0].timerId)
    }
    setTimeout(
      () =>
        renderToasts(
          getToastComponents(this.toasts),
          this.container,
        ),
      1000,
    )
  }

  getToasts() {
    return this.toasts
  }
}

const toasts = new Toasts()
//Object.freeze(toasts)
export default toasts
