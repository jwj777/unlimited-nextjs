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


export default function NavCarriers({ data }) {

  return (

    <Box mr='3' position='relative' zIndex='2'>

    <Menu>

      <MenuButton as={Button} variant={data?.attributes.pageColor + 'Nav'} size='lg'>
        <Box>
          <Text as='span'>
            Carriers
          </Text>
          <ChevronDownIcon w='6' h='6' ml='1' />
        </Box>
      </MenuButton>

      <MenuList borderRadius='1rem'>
        <Box py='6' px='8' mr='4'>
          <MenuItemL2 href='/service/fuel-card-program' label='Fuel Card Program'>For 33 years we have set the benchmark for reliability in refrigerated transportation</MenuItemL2>
          <MenuItemL2 href='/service/factoring' label='Invoice Factoring'>Our logistics specialists and software ensure your assigned the optimal driver and truck</MenuItemL2>
          {/* <MenuItemL2 href='/service/dispatch-services' label='Dispatch Services'>24/7 support, access to our entire flatbed team and an expansive network of carriers</MenuItemL2> */}
        </Box>
      </MenuList>
    </Menu>

  </Box>

    
  )
}