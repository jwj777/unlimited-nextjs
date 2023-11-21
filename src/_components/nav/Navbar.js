'use client'
import { Box, Button } from "@chakra-ui/react";
import NavShippers from "./NavShippers";
import NavCarriers from "./NavCarriers";


export default function Navbar({ data }) {

  return (
    <Box display='flex' justifyContent='space-between' width='100%'>

      <Box display='flex' flex='2'>
        <NavShippers data={data} />
        <NavCarriers data={data} />
        <Box mr='4'>
          <Button variant={data.data.attributes.pageColor + 'Nav'} size='lg'>Resources</Button>
        </Box>
        <Box>
          <Button variant={data.data.attributes.pageColor + 'Nav'} size='lg'>About</Button>
        </Box>
      </Box>

      <Box>
        <Button>Contact Us</Button>
      </Box>

    </Box>
    
  )
}