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

  setContainer() {
    this.container = document.getElementById(
      'toastContainer',
    )
  }

  addToast({
    type,
    size,
    animation,
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
      animation,
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
    if (this.container.lastElementChild) {
      this.container.lastElementChild.classList.add(
        'onStage',
      )
    }
    renderToasts(
      getToastComponents(this.toasts),
      this.container,
    )
  }

  deleteToast(id, typeOfDelete) {
    const index = this.toasts.findIndex(
      (toast) => toast.id === Number(id),
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
// Object.freeze(toasts)
export default toasts
