
'use client'
import { Box, Link, MenuItem, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { useState } from 'react';

import { motion, isValidMotionProp } from 'framer-motion';
import TitleMedium from '../typography/TitleMedium';
import TitleSmall from '../typography/TitleSmall';


export default function MenuItemL2({ href, children, label }) {

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
        mb='4'
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      > 
        <Box 
          width='320px'
        >
          <Link href={href} variant='noDeco'>
            <Box mb='-2px'>
              <TitleSmall
                fontWeight='500' 
                color={navActive['labelColor']}
              >
                {label}
              </TitleSmall>
            </Box>
            <Text 
              fontSize='sm' 
              color={navActive['textColor']}
            >
              { children }
            </Text>
          </Link>
        </Box>
      </MenuItem>
    </Box>



  )

}