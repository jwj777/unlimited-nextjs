import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
// import LogoIcon from "./LogoIcon";
import LogoImageDark from "./LogoImageDark";
import LogoImageLight from "./LogoImageLight";


export default function Logo({ data }) {

  // console.log('Logo')
  // console.log(data)

  return (
    <LinkBox>
      <LinkOverlay href='/'>
        <Box display='flex' alignItems='center' maxW={{ base: '180px', xl: 'auto' }}>

          {
            data?.attributes.pageColor?.includes('Dark') ?
            <LogoImageDark />
            : data?.attributes.pageColor?.includes('Light') ?
            <LogoImageLight />
            : data?.attributes.pageColor?.includes('White') ?
            <LogoImageLight />
            : <LogoImageLight />
          }

        </Box>
      </LinkOverlay>
    </LinkBox>
    
  )
}