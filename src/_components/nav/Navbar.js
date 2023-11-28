'use client'
import { Box, Button, Link } from "@chakra-ui/react";
import NavShippers from "./NavShippers";
import NavCarriers from "./NavCarriers";
import NavCompany from "./NavCompany";


export default function Navbar({ data }) {

  console.log('NavBar')

  let buttonColor
  data.attributes.pageColor && data.attributes.pageColor.includes('Light', 'White') ? buttonColor = 'primaryLight'
  : data.attributes.pageColor && data.attributes.pageColor.includes('Dark') ? buttonColor = 'primaryDark' 
  : buttonColor = 'primaryDark'

  console.log(buttonColor)

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>

      <Box display='flex' flex='2'>
        <NavShippers data={data} />
        <NavCarriers data={data} />
        <Box mt='12px' display='flex'>
          <Box mr='5'>
            <Link variant={data.attributes.pageColor + 'Button'} fontSize='lg'>Resources</Link>
          </Box>
        </Box>
        <NavCompany data={data} />
      </Box>

      <Box>
        <Button variant={buttonColor} size='md'>
          Contact Us
        </Button>
      </Box>

    </Box>
    
  )
}