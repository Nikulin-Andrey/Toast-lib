import styled from 'styled-components'

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
`

export const Image = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
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
