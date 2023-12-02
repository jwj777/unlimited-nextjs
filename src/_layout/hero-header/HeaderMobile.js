import { Box, Menu, MenuIcon } from "@chakra-ui/react";
import LogoMobile from "@/_components/brand/LogoMobile";
import MobileNavDrawer from "@/_components/nav/MobileNavDrawer";

export default function HeaderMobile({ data }) {

  return (
    <Box
      display='flex' 
      alignItems='center'
      py='0' 
      px='8'
    >

      <Box>
        <MobileNavDrawer data={data} />
      </Box>

      <Box mr='12'>
        <LogoMobile data={data} />
      </Box>
 
    </Box>
    
  )
}