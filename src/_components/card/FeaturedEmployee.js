import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import TitleMedium from "../typography/TitleMedium";
import TitleSmall from "../typography/TitleSmall";
import BodyMedium from "../typography/BodyMedium";

export default function FeaturedEmployee({ data, color }) {

  console.log('Featured Employee')
  console.log(data, color)

  return(
    
    <Box mr='6' mb='6' display='flex' flexDirection={{ base: 'column', md: 'row' }}>
      <Box 
        maxW={{ base: '768px', md: '420px' }}
        maxH={{ base: '440px', md: '300px' }}
        borderTopLeftRadius={{ base: '1.5rem', md: '1.5rem' }}
        borderTopRightRadius={{ base: '1.5rem', md: '0' }}
        borderBottomLeftRadius={{ base: '0', md: '1.5rem' }}
        borderBottomRightRadius={{ base: '0', md: '0' }}
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
        pt={{ base: '8', md: '12' }} pb='8' pl='8' pr={{ base: '0', md: '24' }}
        borderTopLeftRadius={{ base: '0', md: '0' }}
        borderTopRightRadius={{ base: '0', md: '1.5rem' }}
        borderBottomLeftRadius={{ base: '1.5rem', md: '0' }}
        borderBottomRightRadius={{ base: '1.5rem', md: '1.5rem' }}
      >
        <TitleMedium color={color + '.on-surface'}>{data.Name}</TitleMedium>
        <Box opacity='72%'> 
          <BodyMedium color={color + '.on-surface'} thin>
            <Link href={'mailto: ' + data.emailAddress} variant='noDeco'>{data.Title}</Link>
          </BodyMedium>
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