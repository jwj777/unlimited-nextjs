'use client'
import BodyLarge from '@/_components/typography/BodyLarge';
import BodyMedium from '@/_components/typography/BodyMedium';
import TitleSmall from '@/_components/typography/TitleSmall';
import { Box, Link, MenuItem, Text } from '@chakra-ui/react';
import { useState } from 'react';


export default function MobileNavLink({ href, children, label, color }) {
  

  return(
    <Box position='relative'>
      <Box 
        display='flex'
        bg='none'
        mb='7'
        // onMouseEnter={() => handleMouseEnter()}
        // onMouseLeave={() => handleMouseLeave()}
      > 
        <Box>
          <Link href={href} variant='noDeco' color={'neutral.90'}>
      
              <BodyMedium color={'neutral.90'}>
                {label}
              </BodyMedium>
      
          </Link>
        </Box>
      </Box>
    </Box>



  )

}