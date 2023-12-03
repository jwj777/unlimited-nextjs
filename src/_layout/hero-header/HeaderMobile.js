import { Box, Menu, MenuIcon } from "@chakra-ui/react";
import LogoMobile from "@/_components/brand/LogoMobile";
import MobileNavDrawer from "@/_components/nav/mobile-nav/MobileNavDrawer";

export default function HeaderMobile({ data }) {

  // console.log('HeaderMobile')
  // console.log(data)

  return (
    <Box
      display='flex' 
      alignItems='center'
      py='0' 
      px={{ base: '2', md: '4', lg: '8' }}
    >

      <Box mr={{ base: '2', md: '3', lg: '4' }}>
        <MobileNavDrawer data={data} />
      </Box>

      <Box mr='12'>
        <LogoMobile data={data} />
      </Box>
 
    </Box>
    
  )
}