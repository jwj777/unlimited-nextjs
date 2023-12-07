import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react'

export default function HeadlineSmall({ children, text, color, thin }) {

  color ? color : color = 'black'
  let weight
  thin ? weight = '300' : weight = '400'

  return (
    // <Text 
    //   color={color}
    //   fontSize={{ base: '1.4rem', md: '1.6rem', lg: '1.8rem' }}
    //   lineHeight={{ base: '142%', md: '142%', lg: '142%' }}
    //   fontWeight={weight}
    //   mb='0.5rem'
    // >{ children }</Text>

    <Box>

    {

      text ?
      <Box 
        dangerouslySetInnerHTML={{ __html: text }} 
        className='on-surface'
        fontSize={{ base: '1.4rem', md: '1.6rem', lg: '1.8rem' }}
        lineHeight={{ base: '142%', md: '142%', lg: '142%' }}
        fontWeight={weight}
        color={color}
      ></Box> :
      <Box 
        fontSize={{ base: '1.4rem', md: '1.6rem', lg: '1.8rem' }}
        lineHeight={{ base: '142%', md: '142%', lg: '142%' }}
        color={color}
        fontWeight={weight}
      >{children}</Box>

    }

    </Box>

  )
}
