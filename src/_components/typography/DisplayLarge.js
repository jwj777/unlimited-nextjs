import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function DisplayLarge({ children, color }) {

  color ? color : color = 'black'

  return (
    <Text 
      as='h1'
      color={color}
      fontSize={{ base: '3rem', md: '4.5rem', lg: '5rem' }}
      lineHeight={{ base: '120%', md: '102%', lg: '104%' }}
      fontWeight='300'
      letterSpacing={{ base:'-1px', md: '-2px' }}
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.2rem' }}
    >{ children }</Text>
  )
}
