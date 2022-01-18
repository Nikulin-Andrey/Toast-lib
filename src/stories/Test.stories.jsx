import React from 'react'

import { Test } from '@/Test'

export default {
  title: 'Components/Test',
  component: Test,
}

const Template = (args) => <Test {...args} />

export const showToasts = Template.bind({})
showToasts.args = {
  positionX: 'end',
  positionY: 'start',
  toastSize: 'sm',
}
