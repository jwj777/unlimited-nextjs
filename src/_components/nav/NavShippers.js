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


export default function NavShippers({ data }) {

  return (

    <Box mr='4' position='relative' zIndex='2'>

    <Menu>
      <MenuButton as={Button} variant={data.data.attributes.pageColor + 'Nav'} size='lg'>
        <Box>
          <Text as='span'>
            Shippers
          </Text>
          <ChevronDownIcon w='6' h='6' ml='1' />
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem>Refrigerated</MenuItem>
        <MenuItem>Dry Van</MenuItem>
        <MenuItem>Flatbed</MenuItem>
      </MenuList>
    </Menu>

  </Box>

  )
}