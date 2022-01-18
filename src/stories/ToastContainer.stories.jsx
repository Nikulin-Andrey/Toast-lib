import React from 'react'

import { ToastContainer } from '@/components/ToastContainer/index'

export default {
  title: 'Components/ToastContainer',
  component: ToastContainer,
}

const Template = (args) => <ToastContainer {...args} />

export const TopLeft = Template.bind({})
TopLeft.args = {
  positionX: 'start',
  positionY: 'start',
  toastSize: 'md',
}
