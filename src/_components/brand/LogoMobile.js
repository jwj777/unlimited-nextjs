import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import LogoIconMobile from "./LogoIconMobile";


export default function LogoMobile({ data, color }) {

  // console.log('Logo')
  // console.log(data)

  return (
    <LinkBox>
      <LinkOverlay href='/'>
        <Box display='flex' alignItems='center'>
          <LogoIconMobile data={data} color={color} />
        </Box>
      </LinkOverlay>
    </LinkBox>
    
  )
}