import { Box, Menu, MenuIcon } from "@chakra-ui/react";
import LogoMobile from "@/_components/brand/LogoMobile";
import MobileNavDrawer from "@/_components/nav/mobile-nav/MobileNavDrawer";
import Logo from "@/_components/brand/Logo";

export default function HeaderMobile({ data }) {

  // console.log('HeaderMobile')
  // console.log(data)

  return (
    <Box
      display='flex' 
      alignItems='center'
      height='80px'
      py='0' 
      px={{ base: '2', md: '4', lg: '8' }}
    >

      <Box mr={{ base: '2', md: '3', lg: '4' }}>
        <MobileNavDrawer data={data} />
      </Box>

      <Box mr='12'>
        <Logo data={data} />
      </Box>
 
    </Box>
    
  )
}