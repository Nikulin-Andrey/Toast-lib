import React from 'react'
import propTypes from 'prop-types'

import { ToastContainer } from './components/ToastContainer/index'
import { toastMaker } from './toastMaker'

export const Test = ({
  positionX = 'end',
  positionY = 'start',
  toastSize = 'sm',
}) => {
  const toastSome = () => {
    const toast = {
      type: 'warning',
      heading: 'warning test',
      description: `descriptiondescriptescriptiondescriptio
        ndescriptiondescriptiondescription`,
      animation: 'fromRight',
    }
    toastMaker(toast)
  }

  return (
    <div>
      <button onClick={toastSome}>toast</button>
      <ToastContainer
        positionY={positionY}
        positionX={positionX}
        toastSize={toastSize}
        padding={20}
      />
    </div>
  )
}

Test.propTypes = {
  positionX: propTypes.oneOf(['start', 'end']),
  positionY: propTypes.oneOf(['start', 'end']),
  toastSize: propTypes.oneOf(['sm', 'md', 'lg']),
}
