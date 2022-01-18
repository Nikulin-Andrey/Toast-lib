import React from 'react'
import { render } from 'react-dom'
import toasts from '@/toasts'
import { Toast } from '@/components/Toast'

export const deleteToastEvent = (id, type) => {
  const target = document.getElementById(id)
  target.classList.add('delete')
  toasts.deleteToast(id, type)
}

export const getToastComponents = (toasts) =>
  toasts.map((toast) => (
    <Toast key={toast.id} id={toast.id} {...toast} />
  ))

export const renderToasts = (toasts, container) =>
  render(toasts, container)
