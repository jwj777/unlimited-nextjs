import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function TitleSmall({ children, color }) {

  color ? color : color = 'black'

  return (
    <Text 
      color={color}
      fontSize={{ base: '1.05rem', md: '1.1rem', lg: '1.1rem' }}
      lineHeight={{ base: '140%', md: '142%', lg: '142%' }}
      fontWeight='500'
      mb='0.5rem'
    >{ children }</Text>
  )
}
