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


export default function NavShippers({ data }) {

  return (

    <Box mr='2' position='relative' zIndex='2'>

    <Menu>

      <MenuButton as={Button} variant={data?.attributes.pageColor + 'Nav'} size='lg'>
        <Box>
          <Text as='span'>
            Shippers
          </Text>
          <ChevronDownIcon w='6' h='6' ml='1' />
        </Box>
      </MenuButton>

      <MenuList borderRadius='1rem'>
        <Box py='6' px='8' display='flex'>
          <Box mr='4'>
            <MenuItemL2 href='/service/refrigerated' label='Refrigerated'>For 33 years we have set the benchmark for reliability in refrigerated transportation</MenuItemL2>
            <MenuItemL2 href='/service/dry-van' label='Dry Van'>Our logistics specialists and software ensure your assigned the optimal driver and truck</MenuItemL2>
            <MenuItemL2 href='/service/flatbed' label='Flatbed'>24/7 support, access to our entire flatbed team and an expansive network of carriers</MenuItemL2>
          </Box>
          <Box>
            <MenuItemL2 href='/service/ltl-services' label='LTL Services'>Our logistics specialists and software ensure your assigned the optimal driver and truck</MenuItemL2>
            <MenuItemL2 href='/service/software' label='Software'>Track our drivers from origin to destination and track trailers by independent GPS tracking units</MenuItemL2>
          </Box>
        </Box>
      </MenuList>
    </Menu>

  </Box>

  )
}