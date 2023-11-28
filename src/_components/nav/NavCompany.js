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


export default function NavCompany({ data }) {

  return (

    <Box mr='4' position='relative' zIndex='2'>

      <Menu>

        <MenuButton as={Button} variant={data.attributes.pageColor + 'Nav'} size='lg'>
          <Box>
            <Text as='span'>
              Our Company
            </Text>
            <ChevronDownIcon w='6' h='6' ml='1' />
          </Box>
        </MenuButton>

        <MenuList borderRadius='1rem'>
        <Box py='6' px='8' display='flex'>
          <Box mr='4'>
            <MenuItemL2 href='/page/about' label='About Us'>For 33 years we have set the benchmark for reliability in refrigerated transportation</MenuItemL2>
            <MenuItemL2 href='/page/resources' label='Resources'>Our logistics specialists and software ensure your assigned the optimal driver and truck</MenuItemL2>
            <MenuItemL2 href='/page/team' label='Meet Our Team'>24/7 support, access to our entire flatbed team and an expansive network of carriers</MenuItemL2>
            <MenuItemL2 href='/page/careers' label='Careers'>24/7 support, access to our entire flatbed team and an expansive network of carriers</MenuItemL2>
          </Box>
        </Box>
      </MenuList>

      </Menu>

    </Box>
    
  )
}