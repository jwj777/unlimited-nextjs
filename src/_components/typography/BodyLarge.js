import React from "react";
import { Box, Text } from '@chakra-ui/react'
import styles from "./typography.module.css"


export default function BodyLarge({ text, textColor, color, children, thin }) {

  textColor ? color = textColor : null
  color ? color = color : color = 'white'
  let weight
  thin ? weight = '300' : weight = '400'

  return (
    <Box color={textColor} className={styles.bodyContent2}>
      {
      text ?
      <Box 
        dangerouslySetInnerHTML={{ __html: text }} 
        fontSize={{ base: '1.2rem', md: '1.4rem' }}
        lineHeight={{ base: '152%', md: '158%' }}
        fontWeight={weight}
        color={color}
      ></Box> :
      <Box 
        fontSize={{ base: '1.2rem', md: '1.4rem' }}
        lineHeight={{ base: '152%', md: '158%' }}
        color={color}
        fontWeight={weight}
      >{children}</Box>
}
    </Box>
  )}

