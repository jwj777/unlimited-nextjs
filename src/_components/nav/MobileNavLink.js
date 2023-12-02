'use client'
import BodyLarge from '@/_components/typography/BodyLarge';
import BodyMedium from '@/_components/typography/BodyMedium';
import TitleSmall from '@/_components/typography/TitleSmall';
import { Box, Link, MenuItem, Text } from '@chakra-ui/react';
import { useState } from 'react';


export default function MobileNavLink({ href, children, label, data }) {

  // const initialValues = {           
  //   labelColor: 'black',
  //   textColor: 'gray.500',
  //   border: '0px',
  //   };

  // const [navActive, setNavActive] = useState(initialValues)

  // const handleMouseEnter = () => {
  //   setNavActive({
  //     ...navActive,
  //     labelColor: 'primary.70',
  //     textColor: 'primary.70',
  //     border: '1px',
  //     display: 'block'
  //   })
  // }

  // const handleMouseLeave = () => {
  //   setNavActive({
  //     ...navActive,
  //     labelColor: 'neutralVariant.10',
  //     textColor: 'neutralVariant.60',
  //     border: '0px',
  //     display: 'none'
  //   })
  // }
  

  return(
    <Box position='relative'>
      <Box 
        display='flex'
        bg='none'
        mb='4'
        // onMouseEnter={() => handleMouseEnter()}
        // onMouseLeave={() => handleMouseLeave()}
      > 
        <Box>
          <Link href={href} variant='noDeco' color={data.attributes.pageColor + '.on-surface'}>
      
              <BodyMedium color={data.attributes.pageColor + '.on-surface'}>
                {label}
              </BodyMedium>
      
          </Link>
        </Box>
      </Box>
    </Box>



  )

}