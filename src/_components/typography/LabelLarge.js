import React from "react";
import { Text } from '@chakra-ui/react'


export default function LabelLarge({ children, color }) {

  color ? color : color = 'black'

  return (
    <Text 
      className="overline"
      fontSize={{ base: '1.05rem', md: '1.15rem' }}
      fontWeight='400'
      textTransform='uppercase'
      letterSpacing='9px'
      color={color}
    >{ children }</Text>
  )
}
