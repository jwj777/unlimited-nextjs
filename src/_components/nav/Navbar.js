'use client'
import { Box, Button } from "@chakra-ui/react";
import NavShippers from "./NavShippers";
import NavCarriers from "./NavCarriers";


export default function Navbar({ data }) {

  console.log(data)

  let buttonColor
  data.attributes.pageColor.includes('Light', 'White') ? buttonColor = 'primaryLight'
  : data.attributes.pageColor.includes('Dark') ? buttonColor = 'primaryDark' 
  : buttonColor = 'primaryDark'

  return (
    <Box display='flex' justifyContent='space-between' width='100%'>

      <Box display='flex' flex='2'>
        <NavShippers data={data} />
        <NavCarriers data={data} />
        <Box mr='4'>
          <Button variant={data.attributes.pageColor + 'Nav'} size='lg'>Resources</Button>
        </Box>
        <Box>
          <Button variant={data.attributes.pageColor + 'Nav'} size='lg'>About</Button>
        </Box>
      </Box>

      <Box>
        <Button variant={buttonColor} size='md' href={data.attributes.callToAction.buttonUrl}>
          Contact Us
        </Button>
      </Box>

    </Box>
    
  )
}