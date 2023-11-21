import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function HeadlineMedium({ children, color }) {

  color ? color : color = 'black'

  return (
    <Text 
      color={color}
      fontSize={{ base: '1.8rem', md: '2.4rem', lg: '2.4rem' }}
      lineHeight={{ base: '116%', lg: '116%' }}
      fontWeight='400'
      letterSpacing='-1px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1rem' }}
    >{ children }</Text>
  )
}
