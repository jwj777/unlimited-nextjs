
'use client'
import { Box, Link, MenuItem, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { useState } from 'react';
import { motion, isValidMotionProp } from 'framer-motion';
import TitleSmall from '../typography/TitleSmall';


export default function MenuItemL2({ href, children, label }) {

  let border

  const initialValues = {           
    labelColor: 'black',
    textColor: 'gray.500',
    border: '0px',
    left: '0px'
    };

  const [navActive, setNavActive] = useState(initialValues)

  const handleMouseEnter = () => {
    setNavActive({
      ...navActive,
      labelColor: 'primary.50',
      textColor: 'primary.50',
      border: '1px',
      borderLeft: '3px',
      display: 'block',
      left: '8px'
    })
  }

  const handleMouseLeave = () => {
    setNavActive({
      ...navActive,
      labelColor: 'neutralVariant.10',
      textColor: 'neutralVariant.60',
      border: '0px',
      borderLeft: '0px',
      display: 'none' ,
      left: '0px'
    })
  }
  

  return(
    <Box position='relative'>
      <MenuItem 
        display='flex'
        bg='none'
        mb='4'
        ml='4'
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        pl={navActive['left']}
        mr={'-' + navActive['left']}
        transition='all 0.06s ease'
        // borderLeft={navActive['borderLeft']}
        border='3px'
        borderColor='primary.50'

      > 
        <Box 
          width='360px'
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