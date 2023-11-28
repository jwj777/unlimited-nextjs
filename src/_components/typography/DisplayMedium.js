import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function DisplayMedium({ children, color, type, thin }) {

  color ? color : color = 'neutral.100'

  type ? type : type = 'h2'

  let weight
  thin ? weight = '300' : weight = '400'

  return (
    <Text 
      as={type}
      color={color}
      fontSize={{ base: '2.8rem', md: '3.2rem', lg: '3.6rem' }}
      lineHeight={{ base: '112%', md: '112%', lg: '114%' }}
      fontWeight={weight}
      letterSpacing='-1px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.2rem' }}
    >{ children }</Text>
  )
}
