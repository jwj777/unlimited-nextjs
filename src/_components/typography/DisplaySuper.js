import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function DisplaySuper({ children, color }) {


  return (
    <Text 
      as='h1'
      color={color}
      fontSize={{ base: '3rem', md: '4.5rem', lg: '5.2rem', lg: '5.6rem' }}
      lineHeight={{ base: '114%', md: '100%', lg: '100%' }}
      fontWeight='300'
      letterSpacing={{ base: '-1px', md: '-2px' }}
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.2rem' }}
    >{ children }</Text>
  )
}
