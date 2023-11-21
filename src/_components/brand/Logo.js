import { Box, Text } from "@chakra-ui/react";
import LogoIcon from "./LogoIcon";


export default function Logo({ data }) {

  return (
    <Box display='flex' alignItems='center'>
      <LogoIcon data={data} />
    </Box>
    
  )
}