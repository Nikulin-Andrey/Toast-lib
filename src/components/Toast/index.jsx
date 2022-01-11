import React from 'react'

import closeWarning from '../../assets/closeWarning.svg'
import close from '../../assets/close.svg'
import {
  getCurrentColors,
  getCurrentSizes,
  getCurrentLogo,
} from '../../helpers/themeFromProps'
import * as theme from '../../theme'

import {
  Container,
  Image,
  LeftContainer,
  RightContainer,
  Description,
  Header,
  TextContainer,
} from './component'

export const Toast = ({
  type = 'warning',
  size = 'md',
  heading,
  description,
}) => {
  const currentTheme = {
    ...getCurrentColors(theme, type),
    ...getCurrentSizes(theme, size),
  }
  const logo = getCurrentLogo(type)

  return (
    <Container
      background={currentTheme.background}
      width={currentTheme.width}
      padding={currentTheme.padding}
      textColor={currentTheme.textColor}>
      <LeftContainer padding={currentTheme.padding}>
        <Image src={logo} size={currentTheme.logo} />
        <TextContainer textMargin={currentTheme.textMargin}>
          <Header largeText={currentTheme.largeText}>
            Warning toast
          </Header>
          {description && (
            <Description smallText={currentTheme.smallText}>
              {description}
            </Description>
          )}
        </TextContainer>
      </LeftContainer>
      <RightContainer>
        <Image
          src={type === 'warning' ? closeWarning : close}
          size={currentTheme.close}
        />
      </RightContainer>
    </Container>
  )
}
