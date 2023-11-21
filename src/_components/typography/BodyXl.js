import React from "react";
import { Box, Text } from '@chakra-ui/react'
import styles from "./typography.module.css"


export default function BodyXl({ text, color, children, thin }) {

  color ? color = color : color = 'neutral.10'
  let weight
  thin ? weight = '300' : weight = '400'

  return (
    <Box className={styles.bodyContent2}>
      {
      text ?
      <Box 
        dangerouslySetInnerHTML={{ __html: text }} 
        fontSize={{ base: '1.2rem', md: '1.6rem' }}
        lineHeight={{ base: '152%', md: '154%' }}
        fontWeight={weight}
        color={color}
      ></Box> :
      <Box 
        fontSize={{ base: '1.2rem', md: '1.6rem' }}
        lineHeight={{ base: '152%', md: '154%' }}
        color={color}
        fontWeight={weight}
      >{children}</Box>
}
    </Box>
  )}

