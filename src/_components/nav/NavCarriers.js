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


export default function NavCarriers({ data }) {

  return (

    <Box mr='4' position='relative' zIndex='2'>

      <Menu>
        <MenuButton as={Button} variant={data.data.attributes.pageColor + 'Nav'} size='lg'>
          <Box>
          <Text as='span'>Carriers</Text>
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