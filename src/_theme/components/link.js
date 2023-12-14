import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const sm = defineStyle({
  field: {
    fontSize: '0.9rem !important',
  }
})

const md = defineStyle({
  field: {
    fontSize: '1rem',
  }
})

const lg = defineStyle({
  field: {
    fontSize: '1.5rem',
  }
})

const xl = defineStyle({
  field: {
    fontSize: '2rem',
  }
})

const xxl = defineStyle({
  field: {
    fontSize: '2.6rem',
  }
})


const basic = defineStyle({
  textDecoration: 'underline',
  color: 'neutral.10',
  textDecorationColor: 'neutral.60',
  textUnderlineOffset: '6px',
  textDecorationThickness: '1px',
  transition: 'all 0.1s ease',
  _hover: {
    color: 'primary.70',
    textDecorationColor: 'primary.70',
  }
})

const noDeco = defineStyle({
  textDecoration: 'none',
  _hover: {
    textDecoration: 'none',
  },
})

const mobileLink = defineStyle({
  textDecoration: 'none',
  color: 'neutral.90',
  borderRadius: '10rem',
  _hover: {
    textDecoration: 'none',
    color: 'neutral.95',
  },
})

const neutralWhiteButton = defineStyle({
  bg: 'none',
  color: 'neutral.10',
  borderRadius: '10rem',
  fontSize: '1.2rem',
  py: '14px',
  px: '22px',
    _hover: {
    bg: 'neutral.90',
    color: 'neutral.10',
    textDecor: 'none',
  }
})

const neutralLightButton = defineStyle({
  bg: 'none',
  color: 'neutral.10',
  borderRadius: '10rem',
  py: '14px',
  px: '24px',
    _hover: {
    bg: 'neutral.90',
    color: 'neutral.10',
    textDecor: 'none',
  }
})

const neutralDarkButton = defineStyle({
  bg: 'none',
  color: 'neutral.90',
  borderRadius: '10rem',
  py: '14px',
  px: '24px',
    _hover: {
    bg: 'neutral.20',
    color: 'neutral.90',
    textDecor: 'none',
  }
})

const primaryWhiteButton = defineStyle({
  bg: 'primary.40',
  color: 'primary.95',
  borderRadius: '10rem',
  py: '14px',
  px: '24px',
    _hover: {
    bg: 'primary.30',
    color: 'primary.100',
    textDecor: 'none',
  }
})

const primaryLightButton = primaryWhiteButton

const primaryDarkButton = defineStyle({
  color: 'primary.90',
  borderRadius: '10rem',
  py: '14px',
  px: '24px',
    _hover: {
    bg: 'primaryDark.surface-highest',
    color: 'primary.95',
    textDecor: 'none',
  }
})

const listXl = defineStyle ({
  color: 'neutral.10',
  textDecoration: 'none',
  fontWeight: '300',
  transition: 'all 0.04s ease',
  fontSize: '1.4rem',
  _hover: {
    textDecoration: 'none',
    fontWeight: '400',
  },
})

const basicGray = defineStyle ({
  color: 'neutral.60',
  textDecoration: 'underline',
  _hover: {
    color: 'neutral.30',
    textDecoration: 'underline',
  },
})

export const Link = defineStyleConfig({
  variants: { 
    basic, 
    basicGray, 
    listXl, 
    noDeco,
    mobileLink,
    neutralLightButton, 
    neutralWhiteButton,
    neutralDarkButton,
    primaryLightButton,
    primaryWhiteButton,
    primaryDarkButton,
  },
  sizes: { sm, md, lg, xl, xxl },
  defaultProps: { variant: 'basic', size: 'md' }
})
