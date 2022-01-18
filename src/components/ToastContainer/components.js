import styled from 'styled-components'
import { getCurrentSizes } from '@/helpers/themeFromProps'

export const Container = styled.div`
  left: ${(props) => {
    return props.positionX === 'start'
      ? 0
      : innerWidth -
          getCurrentSizes(props.toastSize).width -
          props.padding * 2
  }}px;
  ${(props) => {
    return props.positionY === 'start' ? 'top' : 'bottom'
  }}: 0;
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-${(props) => props.positionY};
  padding: ${(props) => props.padding}px;
  & .info {
    background: ${(props) => props.info};
  }
  & .warning {
    background: ${(props) => props.warning};
  }
  & .error {
    background: ${(props) => props.error};
  }
  & .success {
    background: ${(props) => props.success};
  }
`
