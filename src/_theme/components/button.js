import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const xs = defineStyle({
  fontSize: '0.85rem',
  pt: '0.95rem',
  pr: '1rem',
  pb: '0.95rem',
  pl: '1rem',
})

const sm = defineStyle({
  pt: '1.2rem',
  pr: '1.1rem',
  pb: '1.2rem',
  pl: '1.1rem',
})

const md = defineStyle({
  fontSize: '1rem',
  pt: '1.4rem',
  pr: '1.3rem',
  pb: '1.4rem',
  pl: '1.3rem',
})

const lg = defineStyle({
  fontSize: '1.1rem',
  fontWeight: '500',
  pt: '1.6rem',
  pr: '1.6rem',
  pb: '1.6rem',
  pl: '1.6rem',
})

const xl = defineStyle({
  fontSize: '1.4rem',
  fontWeight: '500',
  pt: '1.2rem',
  pr: '1.9rem',
  pb: '1.2rem',
  pl: '1.9rem',
})

const primaryLight = defineStyle({
  bg: 'primary.80',
  color: 'neutral.10',
  borderRadius: '10rem',
  _hover: {
    bg: 'primary.80',
    color: 'neutral.20',
  }
})
const primaryDark = defineStyle({
  bg: 'primary.40',
  color: 'neutral.95',
  borderRadius: '10rem',
  _hover: {
    bg: 'primary.30',
    color: 'neutral.90',
  }
})

const secondaryLight = defineStyle({
  bg: 'secondary.90',
  color: 'secondary.10',
  borderRadius: '10rem',
  _hover: {
    bg: 'secondary.80',
    color: 'secondary.10',
  }
})

const neutralLight = defineStyle({
  bg: 'neutral.90',
  color: 'neutral.10',
  borderRadius: '10rem',
  _hover: {
    bg: 'neutral.80',
    color: 'neutral.10',
  }
})

const neutralLightNav = defineStyle({
  bg: 'none',
  color: 'neutral.10',
  borderRadius: '10rem',
  _hover: {
    bg: 'neutral.90',
    color: 'neutral.10',
  }
})

const neutralDark = defineStyle({
  bg: 'neutral.90',
  color: 'neutral.10',
  borderRadius: '10rem',
  _hover: {
    bg: 'neutral.80',
    color: 'neutral.10',
  }
})

const neutralDarkNav = defineStyle({
  bg: 'none',
  color: 'neutral.90',
  borderRadius: '10rem',
  _hover: {
    bg: 'neutral.90',
    color: 'neutral.10',
  }
})

export const Button = defineStyleConfig({
  sizes: { xs, sm, md, lg, xl },
  variants: { 
    primaryDark, 
    primaryLight,
    secondaryLight,
    neutralLight,
    neutralLightNav,
    neutralDark,
    neutralDarkNav,
  },
  defaultProps: {
    size: 'md',
    variant: 'primaryLight',
  },
})
