import React from 'react'
import { storiesOf } from '@storybook/react'

import { Toast } from '../components/Toast'

export default {
  title: 'Example/Toast',
  component: Toast,
}

export const Info = () => <Toast type="info" />
export const Warning = () => <Toast type="warning" />
export const Error = () => <Toast type="error" />
export const Success = () => <Toast type="success" />
