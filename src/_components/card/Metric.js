import { Box } from "@chakra-ui/react";
import TitleSmall from "../typography/TitleSmall";
import BodyMedium from "../typography/BodyMedium";
import TitleMedium from "../typography/TitleMedium";
import TitleLarge from "../typography/TitleLarge";
import DisplaySuper from "../typography/DisplaySuper";
import BodyLarge from "../typography/BodyLarge";

export default function Metric({ data, color }) {

  // console.log('Metric')
  // console.log(data)

  return(
  
    <Box>
      <Box 
        bg={color + '.surface'} 
        p='12' 
        pt={{ base: '6', lg: '12' }} 
        pr={{ base: '0', lg: '24' }}
        borderRadius='1rem'
      >
        <Box display='flex' mb='-16px'>
          <DisplaySuper color={color + '.on-surface'}>{data.Metric + ' ' + data.Suffix}</DisplaySuper>
        </Box>
        <Box>
          <BodyLarge color={color + '.on-surface'} >{data.metricText}</BodyLarge>
        </Box>
      </Box>
    </Box>

  )

}