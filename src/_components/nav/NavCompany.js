'use-client'
import { 
  Box, 
  Button,
  Icon, 
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import MenuItemL2 from './MenuItemL2';
import MenuItemShort from './MenuItemShort';


export default function NavCompany({ data }) {

  return (

    <Box mr='4' position='relative' zIndex='2'>

      <Menu>

        <MenuButton as={Button} variant={data?.attributes.pageColor + 'Nav'} size='lg'>
          <Box>
            <Text as='span'>
              Our Company
            </Text>
            <ChevronDownIcon w='6' h='6' ml='1' />
          </Box>
        </MenuButton>

        <MenuList borderRadius='1rem'>
        <Box pt='5' pb='2' px='6' display='flex'>
          <Box mr='4'>
            <MenuItemShort href='/page/about' label='About Us'></MenuItemShort>
            <MenuItemShort href='/page/resources' label='Resources & Insights'></MenuItemShort>
            {/* <MenuItemL2 href='/page/team' label='Meet Our Team'></MenuItemL2> */}
            <MenuItemShort href='/page/careers' label='Careers'></MenuItemShort>
          </Box>
        </Box>
      </MenuList>

      </Menu>

    </Box>
    
  )
}