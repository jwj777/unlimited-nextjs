import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

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
  },
  // _dark: {
  //   color: 'primary.90',
  // }
})

const noDeco = defineStyle({
  textDecoration: 'none',
  _hover: {
    textDecoration: 'none',
  },
})

const linkLight = defineStyle ({
  color: 'neutral.90',
  textDecoration: 'none',
  fontWeight: '400',
  transition: 'all 0.04s ease',
  fontSize: '1rem',
  _hover: {
    color: 'white',
    textDecoration: 'underline',
    fontWeight: '400',
  },
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


const sm = defineStyle({
  field: {
    fontSize: '0.9rem',
  }
})

const md = defineStyle({
  field: {
    fontSize: '1rem',
  }
})

const lg = defineStyle({
  field: {
    fontSize: '1.4rem',
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


export const Link = defineStyleConfig({
  variants: { basic, basicGray, listXl, noDeco },
  sizes: { sm, md, lg, xl, xxl },
  defaultProps: { variant: 'basic', size: 'md' }
})
