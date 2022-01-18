import React from 'react'
import propTypes from 'prop-types'

import closeWarning from '@/assets/closeWarning.svg'
import close from '@/assets/close.svg'
import {
  getCurrentColors,
  getCurrentSizes,
  getCurrentLogo,
} from '@/helpers/themeFromProps'
import { deleteToastEvent } from '@/helpers/toastEvents'

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
  id,
  color,
  textColor,
}) => {
  const currentTheme = {
    ...getCurrentColors(type),
    ...getCurrentSizes(size),
  }
  const logo = getCurrentLogo(type)

  const onDelete = (e) => {
    const contaner = e.target.parentElement.parentElement
    if (!contaner.classList.contains('delete')) {
      const id = contaner.id
      deleteToastEvent(id, 'click')
    }
  }

  return (
    <Container
      background={color || currentTheme.background}
      width={currentTheme.width}
      padding={currentTheme.padding}
      textColor={textColor || currentTheme.textColor}
      id={id}
      className={type}>
      <LeftContainer padding={currentTheme.padding}>
        <Image src={logo} size={currentTheme.logo} />
        <TextContainer textMargin={currentTheme.textMargin}>
          <Header largeText={currentTheme.largeText}>
            {heading || `${type} toast`}
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
          data-delete={`delete_${id}`}
          size={currentTheme.close}
          cursor="pointer"
          onClick={onDelete}
        />
      </RightContainer>
    </Container>
  )
}

Toast.propTypes = {
  type: propTypes.oneOf([
    'info',
    'warning',
    'error',
    'success',
  ]),
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  heading: propTypes.string,
  description: propTypes.string,
  color: propTypes.string,
  textColor: propTypes.string,
}
