import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function TitleLarge({ children, color }) {

  color ? color : color = 'black'

  return (
    <Text 
      color={color}
      fontSize={{ base: '1.4rem', md: '1.5rem', lg: '1.6rem' }}
      lineHeight={{ base: '108%', md: '104%', lg: '142%' }}
      fontWeight='400'
      mb='0.5rem'
    >{ children }</Text>
  )
}
