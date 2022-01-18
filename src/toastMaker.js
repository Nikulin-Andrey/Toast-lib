import toasts from '@/toasts'

export const toastMaker = (
  toastParameters,
  lifeTime = 5000,
) => {
  toasts.setContainer()
  const {size} = toasts.container.dataset
  const id = Math.random() * 10000
  toasts.addToast({
    ...toastParameters,
    size,
    id,
    lifeTime,
  })
}
