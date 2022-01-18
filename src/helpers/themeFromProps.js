import warning from '../assets/warning.svg'
import info from '../assets/info.svg'
import error from '../assets/error.svg'
import success from '../assets/success.svg'
import * as theme from '@/theme'

export const getCurrentColors = (type) => {
  switch (type) {
    case 'info':
      return theme.infoToastColors
    case 'warning':
      return theme.warningToastColors
    case 'error':
      return theme.errorToastColors
    case 'success':
      return theme.successToastColors
  }
}

export const getCurrentSizes = (size) => {
  switch (size) {
    case 'sm':
      return theme.smallSizes
    case 'md':
      return theme.mediumSizes
    case 'lg':
      return theme.largeSizes
  }
}

export const getCurrentLogo = (type) => {
  switch (type) {
    case 'info':
      return info
    case 'warning':
      return warning
    case 'error':
      return error
    case 'success':
      return success
  }
}
