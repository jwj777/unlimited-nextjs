import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import LogoIcon from "./LogoIcon";


export default function Logo({ data }) {

  return (
    <LinkBox>
      <LinkOverlay href='/'>
        <Box display='flex' alignItems='center'>
          <LogoIcon data={data} />
        </Box>
      </LinkOverlay>
    </LinkBox>
    
  )
}