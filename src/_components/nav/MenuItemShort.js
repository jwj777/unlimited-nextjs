
'use client'
import { Box, Link, MenuItem, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { useState } from 'react';

import { motion, isValidMotionProp } from 'framer-motion';
import TitleMedium from '../typography/TitleMedium';
import TitleSmall from '../typography/TitleSmall';


export default function MenuItemShort({ href, children, label }) {

  let border

  const initialValues = {           
    labelColor: 'black',
    textColor: 'gray.500',
    border: '0px',
    };

  const [navActive, setNavActive] = useState(initialValues)

  const handleMouseEnter = () => {
    setNavActive({
      ...navActive,
      labelColor: 'primary.70',
      textColor: 'primary.70',
      border: '1px',
      display: 'block'
    })
  }

  const handleMouseLeave = () => {
    setNavActive({
      ...navActive,
      labelColor: 'neutralVariant.10',
      textColor: 'neutralVariant.60',
      border: '0px',
      display: 'none'
    })
  }
  

  return(
    <Box position='relative'>
      <MenuItem 
        display='flex'
        bg='none'
        mb='3'
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      > 
        <Box>
          <TitleSmall
            fontWeight='500' 
            color={navActive['labelColor']}
          >
            <Link href={href} variant='noDeco'>
              {label} 
            </Link>
          </TitleSmall>
        </Box>
      </MenuItem>
    </Box>



  )

}