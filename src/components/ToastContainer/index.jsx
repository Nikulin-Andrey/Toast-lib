import React from 'react'
import propTypes from 'prop-types'

import { Container } from './components'

export const ToastContainer = ({
  positionX = 'end',
  positionY = 'end',
  toastSize = 'md',
  padding = 10,
  infoColor,
  warningColor,
  errorColor,
  successColor,
}) => {
  return (
    <Container
      positionY={positionY}
      positionX={positionX}
      toastSize={toastSize}
      id="toastContainer"
      data-size={toastSize}
      padding={padding}
      info={infoColor}
      warning={warningColor}
      error={errorColor}
      success={successColor}
    />
  )
}

ToastContainer.propTypes = {
  positionX: propTypes.oneOf(['start', 'end']),
  positionY: propTypes.oneOf(['start', 'end']),
  toastSize: propTypes.oneOf(['sm', 'md', 'lg']),
  padding: propTypes.number,
  infoColor: propTypes.string,
  warningColor: propTypes.string,
  errorColor: propTypes.string,
  successColor: propTypes.string,
}
