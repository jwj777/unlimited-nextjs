import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import TitleMedium from "../typography/TitleMedium";
import TitleSmall from "../typography/TitleSmall";
import BodyMedium from "../typography/BodyMedium";

export default function Employee({ data, color }) {

  // console.log('Employee')

  return(
    
    <Box mr={{ base: '0', sm: '8', md: '12' }} mb='12'>
      <Box 
        maxW={{ base: '768px', md: '280px' }}
        maxH={{ base: '340px', md: '180px' }}
        borderTopLeftRadius='1.5rem' 
        borderTopEndRadius='1.5rem' 
        overflow='hidden'
      >
        {
          data.Picture.data ?
          <Image
            src={data.Picture.data.attributes.url}
            width={768}
            height={340}
            alt=""
            sizes="(max-width: 768px) 100%, 280px"
          /> : null
        }
      </Box>
      <Box 
        bg={color + '.surface'} 
        pt='6' pb='6' pl='6' pr='3'
        borderBottomLeftRadius='1.5rem'
        borderBottomEndRadius='1.5rem'
      >
        <Box mb='-4px'>
          <TitleSmall color={color + '.on-surface'}>{data.Name}</TitleSmall>
        </Box>
        <Box opacity='72%'> 
          <BodyMedium color={color + '.on-surface'} thin>
            <Link href={'mailto: ' + data.emailAddress} variant='noDeco'>{data.emailAddress}</Link>
          </BodyMedium>
        </Box>
      </Box>
    </Box>

  )

}