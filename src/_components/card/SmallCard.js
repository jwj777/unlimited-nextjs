import { Box } from "@chakra-ui/react";
import Image from "next/image";
import TitleMedium from "../typography/TitleMedium";
import TitleSmall from "../typography/TitleSmall";

export default function SmallCard({ data, color }) {

  // console.log('SmallCard')

  return(
    
    <Box mr='6' mb='6'>
      <Box 
        width='240px'
        height='180px'
        borderTopLeftRadius='1.5rem' 
        borderTopEndRadius='1.5rem' 
        overflow='hidden'
      >
        <Image
          src={data.Image.data.attributes.url}
          width={240}
          height={180}
          alt=""
        />
      </Box>
      <Box 
        bg={color + '.surface'} 
        pt='6' pb='4' pl='6' pr='3'
        borderBottomLeftRadius='1.5rem'
        borderBottomEndRadius='1.5rem'
      >
        <TitleSmall color={color + '.on-surface'}>{data.Title}</TitleSmall>
      </Box>
    </Box>

  )

}