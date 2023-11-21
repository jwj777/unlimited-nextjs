import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function DisplaySuper({ children, textColor, color }) {

  textColor ? textColor = textColor : textColor = 'neutral.10'
  color ? color : color = 'neutral.10'

  return (
    <Text 
      as='h1'
      color={textColor}
      fontSize={{ base: '3.2rem', md: '4.2rem', lg: '5.5rem', lg: '6.4rem' }}
      lineHeight={{ base: '112%', md: '104%', lg: '104%' }}
      fontWeight='300'
      letterSpacing={{ base: '-1px', md: '-2px' }}
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.2rem' }}
    >{ children }</Text>
  )
}
