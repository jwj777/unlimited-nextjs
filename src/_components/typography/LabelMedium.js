import React from "react";
import { Text } from '@chakra-ui/react'


export default function LabelMedium({ children, textColor, color }) {

  textColor ? color = textColor : null
  color ? color : color = 'neutral.10'


  return (
    <Text 
      className="overline"
      fontSize={{ base: '1rem', md: '1.05rem' }}
      fontWeight='400'
      textTransform='uppercase'
      letterSpacing='8px'
      color={color}
    >{ children }</Text>
  )
}
