import React from 'react'

import { Toast } from '@/components/Toast'

export default {
  title: 'Components/Toast',
  component: Toast,
}

const Template = (args) => <Toast {...args} />

export const Info = Template.bind({})
Info.args = {
  type: 'info',
  size: 'md',
  heading: '',
  description: '',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  size: 'md',
  heading: '',
  description: '',
}

export const Err = Template.bind({})
Err.args = {
  type: 'error',
  size: 'md',
  heading: '',
  description: '',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  size: 'md',
  heading: '',
  description: '',
}
