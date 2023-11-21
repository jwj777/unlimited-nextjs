import Logo from "@/_components/brand/Logo";
import Navbar from "@/_components/nav/Navbar";
import { Box } from "@chakra-ui/react";


export default function Header() {

  let color = 'neutralLight'

  return (
    <Box
      display='flex' 
      alignItems='center'
      py='4' 
      px='8'
    >
      <Box mr='20'>
        <Logo />
      </Box>
      <Box mt='1'>
        <Navbar color={color} />
      </Box>
    </Box>
    
  )
}