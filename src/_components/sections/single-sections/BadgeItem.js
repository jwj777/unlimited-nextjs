import HeadlineMedium from "@/_components/typography/HeadlineMedium";
import { Box } from "@chakra-ui/react";
import Image from "next/image";


export default function BadgeItem({ imageUrl, size }) {

  let width
  let height
  size == 'md' ? (width = '220', height='160')
  : size == 'lg' ? (width = '360', height='200')
  : (width = '220', height='160')

  return(

    <Box 
      mx='4' 
      // width={{ base: '', md: width + 'px'}}
      width={width + 'px'}
      height={height + 'px'}
      position='relative'
      display={'flex'}
      alignItems='center'
      bg='neutral.100'
      p='6'
      mb={{ base: '8', lg: '12', '2xl': '0' }}
      borderRadius='1.5rem'
    > 
      <Image
        src={imageUrl}
        width={width}
        height={height}
        // objectFit="contain"
        alt=""
      />
    </Box>
 
  )

}