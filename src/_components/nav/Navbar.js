'use client'
import { Box, Button, Link } from "@chakra-ui/react";
import NavShippers from "./NavShippers";
import NavCarriers from "./NavCarriers";
import NavCompany from "./NavCompany";

export default function Navbar({ data }) {

  // console.log('Navbar')
  // console.log(data)

  let buttonColor
  data?.attributes.pageColor && data?.attributes.pageColor.includes('Light', 'White') ? buttonColor = 'primaryLight'
  : data?.attributes.pageColor && data?.attributes.pageColor.includes('Dark') ? buttonColor = 'primaryDark' 
  : buttonColor = 'primaryDark'

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>

      <Box display='flex' flex='2'>
        <NavShippers data={data} />
        <NavCarriers data={data} />
        <Box mt='12px' mr='5' display='block'>
          <Link href='/page/resources' variant={data?.attributes.pageColor + 'Button'} fontSize='lg'>Resources</Link>
        </Box>
        <NavCompany data={data} />
      </Box>

      <Box>
        <Button variant={buttonColor} size='md'>
          <Link href='/page/contact' variant='noDeco'>
            Contact Us
          </Link>
        </Button>
      </Box>

    </Box>
    
  )
}