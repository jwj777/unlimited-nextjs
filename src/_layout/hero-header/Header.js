import Logo from "@/_components/brand/Logo";
import Navbar from "@/_components/nav/Navbar";
import { Box } from "@chakra-ui/react";


export default function Header({ data, contentType }) {


  return (
    <Box
      display='flex' 
      alignItems='center'
      py='0' 
      px='8'
      height='96px'
    >
      <Box mr='12'>
        <Logo data={data} />
      </Box>
      <Box mt='1' flex='2'>
        <Navbar data={data} contentType={contentType} />
      </Box>
    </Box>
    
  )
}