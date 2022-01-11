const THEME_UNIT_SIZE = 7

const spacing = (margins) => THEME_UNIT_SIZE * margins

export const infoToastColors = {
  background: '#9a40d3',
  textColor: '#fff',
}

export const warningToastColors = {
  background: '#f4e048',
  textColor: '#000',
}

export const errorToastColors = {
  background: '#e25837',
  textColor: '#fff',
}

export const successToastColors = {
  background: '#37e29a',
  textColor: '#fff',
}

export const mediumSizes = {
  largeText: spacing(4),
  smallText: spacing(2),
  width: spacing(75),
  padding: spacing(3),
  textMargin: spacing(5),
  logo: spacing(8),
  close: spacing(4),
}

export const smallSizes = {
  largeText: spacing(3),
  smallText: spacing(2),
  width: spacing(55),
  padding: spacing(2),
  textMargin: spacing(2),
  logo: spacing(5),
  close: spacing(2),
}

export const largeSizes = {
  largeText: spacing(6),
  smallText: spacing(3),
  width: spacing(90),
  padding: spacing(5),
  textMargin: spacing(7),
  logo: spacing(10),
  close: spacing(6),
}
