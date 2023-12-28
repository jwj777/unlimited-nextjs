import { Box } from "@chakra-ui/react";
import BodyMedium from "../typography/BodyMedium";
import TitleLarge from "../typography/TitleLarge";

export default function LtlTextCard({ title, body, color }) {

  // console.log('LtlTextCard')

  return(
    
    <Box maxW='40%'>
      <Box mr='8' mb='8'>
        <Box 
          bg={color + '.surface'} 
          py='8' px='8' pr='16'
          borderRadius='1rem'
        >
          <Box mb='3'>
            <TitleLarge color={color + '.on-surface'}>{title}</TitleLarge>
          </Box>
          <Box opacity='80%'>
            <BodyMedium color={color + '.on-surface'} >{body}</BodyMedium>
          </Box>
        </Box>
      </Box>
    </Box>

  )

}