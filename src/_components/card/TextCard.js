import { Box } from "@chakra-ui/react";
import TitleSmall from "../typography/TitleSmall";
import BodyMedium from "../typography/BodyMedium";
import TitleMedium from "../typography/TitleMedium";
import TitleLarge from "../typography/TitleLarge";

export default function TextCard({ data, color }) {

  // console.log('TextCard')
  // console.log(data)

  return(
    
    <Box maxW={{ base: '100%', md: '46%' }}>
      <Box mr={{ base: '0', md: '8' }} mb='8'>
        <Box 
          bg={color + '.surface'} 
          py={{ base: '6', sm: '8' }}
          px={{ base: '6', sm: '8' }} 
          pr={{ base: '8', sm: '16' }}
          borderRadius='1rem'
        >
          <Box mb='3'>
            <TitleLarge color={color + '.on-surface'}>{data.Title}</TitleLarge>
          </Box>
          <Box opacity='80%'>
            <BodyMedium color={color + '.on-surface'} >{data.Body}</BodyMedium>
          </Box>
        </Box>
      </Box>
    </Box>

  )

}