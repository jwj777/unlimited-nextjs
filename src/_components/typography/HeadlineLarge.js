import React from "react";
import { Heading, Text } from '@chakra-ui/react'

export default function HeadlineLarge({ children, color, thin, as }) {

  color ? color : color = 'black'
  let weight
  thin ? weight = '300' : weight = '400'

  // console.log('HeadlineLarge')
  // console.log(as)

  return (
    <Text
      as={as}
      color={color}
      fontSize={{ base: '2.4rem', md: '2.8rem', lg: '3rem' }}
      lineHeight={{ base: '108%', md: '104%', lg: '112%' }}
      fontWeight={weight}
      letterSpacing='-1px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1rem' }}
    >{ children }</Text>
  )
}
