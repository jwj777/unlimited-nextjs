'use client'
import { Box, Button, Link } from "@chakra-ui/react";
import NavShippers from "./NavShippers";
import NavCarriers from "./NavCarriers";
import NavCompany from "./NavCompany";

export default function Navbar({ data, contentType }) {

  // console.log('Navbar')
  // console.log(data)

  let buttonColor
  data?.attributes.pageColor && data?.attributes.pageColor?.includes('Light', 'White') ? buttonColor = 'primaryLight'
  : data?.attributes.pageColor && data?.attributes.pageColor?.includes('Dark') ? buttonColor = 'primaryDark' 
  : null

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>

      <Box display='flex' flex='2'>
        <NavShippers data={data} />
        <Box mr='4' position='relative' bottom='1px' display='block'>
          <Button variant={data?.attributes.pageColor + 'Nav'} size='lg'>
            <Link href='/service/software' variant={'noDeco'}>Software</Link>
          </Button>
        </Box>       
        <Box mr='4' position='relative' bottom='1px' display='block'>
          <Button variant={data?.attributes.pageColor + 'Nav'} size='lg'>
            <Link href='/page/carrier-setup' variant={'noDeco'}>Carriers</Link>
          </Button>
        </Box>
        {/* <Box mr='4' position='relative' bottom='1px' display='block'>
          <Button variant={data?.attributes.pageColor + 'Nav'} size='lg'>
            <Link href='/page/resources' variant={'noDeco'}>Resources</Link>
          </Button>
        </Box> */}
        <NavCompany data={data} />
      </Box>

      <Box display='flex'>
        <Box mr='6'>
          <Button variant={data?.attributes.pageColor + 'Outline'} size='md'>
            <Link href='/page/track-shipments' variant='noDeco'>
              Track Shipments
            </Link>
          </Button>
        </Box>
        <Button variant={data?.attributes.pageColor} size='md'>
          <Link href='/page/contact' variant='noDeco'>
            Contact Us
          </Link>
        </Button>
      </Box>

    </Box>
    
  )
}