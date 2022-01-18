import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    margin-top: -1000px
  }
  100% {
    opacity: 1;
    margin-top: 20px;
  }
`

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: roboto;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.background};
  width: ${(props) => props.width}px;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.padding}px;
  filter: drop-shadow(
    4.243px 4.243px 4.5px rgba(0, 0, 0, 0.16)
  );
  margin: 0;
  margin-bottom: 10px;
  animation: 1s ${fadeIn} ease-out;
  &.delete {
    transition: margin 1s, opacity 1s;
    opacity: 0;
    margin-top: -140px;
  }
`

export const Image = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  cursor: ${(props) => props.cursor || 'auto'};
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => props.textMargin}px;
`
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding}px 0;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const Description = styled.p`
  font-size: ${(props) => props.smallText}px;
`

export const Header = styled.h3`
  font-size: ${(props) => props.largeText}px;
  margin: 0;
  padding: 0;
  font-weight: 400;
`
