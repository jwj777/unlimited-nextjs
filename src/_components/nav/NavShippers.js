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
// import MenuItemL2 from './MenuItemL2';
import { ChevronDownIcon } from '@chakra-ui/icons'


export default function NavShippers({ color }) {

  return (

    <Box mr='12' position='relative' zIndex='2'>

    <Menu>
      <MenuButton as={Button} variant='neutralLight' size='lg'>
        <Box>
          <Text as='span'>Shippers</Text>
          <ChevronDownIcon w='6' h='6' ml='1' />
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>

  </Box>

  )
}