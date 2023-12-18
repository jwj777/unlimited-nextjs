import { Box, Image } from "@chakra-ui/react";
// import Image from "next/image";
import TitleMedium from "../typography/TitleMedium";
import TitleSmall from "../typography/TitleSmall";

export default function SmallCard({ data, color }) {

  console.log('SmallCard')
  console.log(data.Image)

  return(
    
    <Box mr={{ base: '0', md: '6' }} mb={{ base: '10', md: '6' }}>
      <Box 
        width={{ base: '100%', sm: '100%', md: '240px' }}
        height={{ base: '220px', sm: '140px', md: '180px' }}
        borderTopLeftRadius={{ base: '1rem', md: '1.5rem' }}
        borderTopEndRadius={{ base: '1rem', md: '1.5rem' }}
        overflow='hidden'
      >
        {
          data.Image.data ?
          <Image
            src={
              'https://unlimited-logistics-media.s3.us-east-2.amazonaws.com/' + 
              data.Image.data.attributes.hash + 
              data.Image.data.attributes.ext
            }
            width={480}
            height={360}
            objectFit='cover'
            alt=""
          /> : null
        }
      </Box>
      <Box 
        bg={color + '.surface-high'} 
        pt='6' pb='4' pl='8' pr='3'
        borderBottomLeftRadius={{ base: '1rem', md: '1.5rem' }}
        borderBottomEndRadius={{ base: '1rem', md: '1.5rem' }}
      >
        <TitleSmall color={color + '.on-surface'}>{data.Title}</TitleSmall>
      </Box>
    </Box>

  )

}