import { Box } from "@chakra-ui/react";
import TitleSmall from "../typography/TitleSmall";
import BodyMedium from "../typography/BodyMedium";
import TitleMedium from "../typography/TitleMedium";
import TitleLarge from "../typography/TitleLarge";

export default function TextCard({ data, color }) {

  console.log('TextCard')
  console.log(data)

  return(
    
    <Box maxW='40%'>
      <Box mr='8' mb='8'>
        <Box 
          bg={color + '.surface'} 
          py='8' px='8' pr='16'
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