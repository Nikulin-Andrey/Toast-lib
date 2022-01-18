import { keyframes } from 'styled-components'

import warning from '@/assets/warning.svg'
import info from '@/assets/info.svg'
import error from '@/assets/error.svg'
import success from '@/assets/success.svg'
import * as theme from '@/theme'
import {
  INFO,
  WARNING,
  ERROR,
  SUCCESS,
  SMALL,
  MEDIUM,
  LARGE,
  FROM_BOTTOM,
  FROM_TOP,
  FROM_LEFT,
  FROM_RIGHT,
} from '@/constants'

export const getCurrentColors = (type) => {
  switch (type) {
    case INFO:
      return theme.infoToastColors
    case WARNING:
      return theme.warningToastColors
    case ERROR:
      return theme.errorToastColors
    case SUCCESS:
      return theme.successToastColors
  }
}

export const getCurrentSizes = (size) => {
  switch (size) {
    case SMALL:
      return theme.smallSizes
    case MEDIUM:
      return theme.mediumSizes
    case LARGE:
      return theme.largeSizes
  }
}

export const getCurrentLogo = (type) => {
  switch (type) {
    case INFO:
      return info
    case WARNING:
      return warning
    case ERROR:
      return error
    case SUCCESS:
      return success
  }
}

export const getCurrentAnimation = (animation) => {
  switch (animation) {
    case FROM_TOP:
      return keyframes`
      0% {
        opacity: 0;
        transform: translate(0, -1000px)
      }
      100% {
        opacity: 1;
        transform: translate(0, 0)
      }
    `
    case FROM_RIGHT:
      return keyframes`
      0% {
        opacity: 0;
        transform: translate(1000px, 0)
      }
      100% {
        opacity: 1;
        transform: translate(0, 0)
      }
    `
    case FROM_LEFT:
      return keyframes`
      0% {
        opacity: 0;
        transform: translate(-1000px, 0)
      }
      100% {
        opacity: 1;
        transform: translate(0, 0)
      }
    `
    case FROM_BOTTOM:
      return keyframes`
      0% {
        opacity: 0;
        transform: translate(0, 1000px)
      }
      100% {
        opacity: 1;
        transform: translate(0, 0)
      }
    `
  }
}
