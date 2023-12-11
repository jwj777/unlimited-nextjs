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

const mobileLight = defineStyle({
  bg: 'none',
  color: 'neutral.10',
  py: '6',
  px: '0',
  fontSize: '1.7rem',
  borderRadius: '10rem',
  _hover: {
     color: 'primary.70',
     bg: 'none',
  }
})

const mobileDark = defineStyle({
  bg: 'none',
  color: 'neutral.90',
  py: '6',
  px: '0',
  fontSize: '1.7rem',
  borderRadius: '10rem',
  _hover: {
     color: 'primary.99',
     bg: 'none',
  }
})

const primaryLight = defineStyle({
  bg: 'primary.40',
  color: 'neutral.90',
  borderRadius: '10rem',
  _hover: {
    bg: 'primary.30',
    color: 'primary.95',
  }
})

const primaryWhite = primaryLight

const primaryLightOutline = defineStyle({
  color: 'primary.40',
  borderRadius: '10rem',
  border: '1px',
  borderColor: 'primary.40',
  _hover: {
    bg: 'primary.90',
  }
})

const primaryWhiteOutline = primaryLightOutline

const primaryDark = defineStyle({
  bg: 'primary.40',
  color: 'neutral.95',
  borderRadius: '10rem',
  _hover: {
    bg: 'primary.30',
    color: 'neutral.90',
  }
})

const primaryDarkOutline = defineStyle({
  color: 'primary.90',
  borderRadius: '10rem',
  border: '1px',
  borderColor: 'primary.40',
  _hover: {
    bg: 'primary.40',
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

const neutralWhite = neutralLight

const neutralLightOutline = defineStyle({
  color: 'neutral.10',
  borderRadius: '10rem',
  border: '1px',
  borderColor: 'neutral.70',
  _hover: {
    bg: 'neutral.90',
  }
})

const neutralWhiteOutline = neutralLightOutline

const neutralLightNav = defineStyle({
  bg: 'none',
  color: 'neutral.10',
  borderRadius: '10rem',
  _hover: {
    bg: 'neutral.90',
    color: 'neutral.10',
  }
})

const neutralWhiteNav = neutralLightNav

const neutralDark = defineStyle({
  bg: 'neutral.90',
  color: 'neutral.10',
  borderRadius: '10rem',
  _hover: {
    bg: 'neutral.99',
    color: 'neutral.0',
  }
})

const neutralDarkOutline = defineStyle({
  color: 'neutral.90',
  borderRadius: '10rem',
  border: '1px',
  borderColor: 'neutral.40',
  _hover: {
    bg: 'neutral.20',
  }
})

const neutralDarkNav = defineStyle({
  bg: 'none',
  color: 'neutral.90',
  borderRadius: '10rem',
  _hover: {
    bg: 'neutral.20',
    color: 'neutral.90',
  }
})

const primaryWhiteNav = defineStyle({
  bg: 'none',
  color: 'primary.10',
  borderRadius: '10rem',
  _hover: {
    bg: 'primaryLight.surface-low',
    color: 'primary.20',
  }
})

const primaryLightNav = primaryWhiteNav

const primaryDarkNav = defineStyle({
  bg: 'none',
  color: 'primary.90',
  borderRadius: '10rem',
  _hover: {
    bg: 'primaryDark.surface-highest',
    color: 'primary.95',
  }
})

export const Button = defineStyleConfig({
  sizes: { xs, sm, md, lg, xl },
  variants: { 
    mobileLight,
    mobileDark,
    primaryWhite,
    primaryWhiteOutline,
    primaryLightOutline,
    primaryDark, 
    primaryLight,
    primaryDarkOutline,
    secondaryLight,
    neutralWhite,
    neutralWhiteNav,
    neutralLight,
    neutralLightNav,
    neutralLightOutline,
    neutralWhiteOutline,
    neutralDark,
    neutralDarkOutline,
    neutralDarkNav,
    primaryLightNav, 
    primaryWhiteNav,
    primaryDarkNav,
  },
  defaultProps: {
    size: 'md',
    variant: 'primaryLight',
  },
})
