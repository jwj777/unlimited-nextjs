import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { FiMenu } from "react-icons/fi";
import React from 'react'
import Logo from '../../brand/Logo';
import MobileNavLink from './MobileNavLink';
import MobileShippers from './MobileShippers';
import MobileCarriers from './MobileCarriers';
import LogoMobile from '@/_components/brand/LogoMobile';

export default function MobileNavDrawer({ data }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  console.log('MobileNavDrawer')
  console.log(data)

  return (
    <Box>

      <Button ref={btnRef} onClick={onOpen} variant='mobileLight'>
        <FiMenu />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background='neutral.4' maxW={{ base: '84%', lg: '440px' }} px='4'>
            <DrawerCloseButton color='neutral.90' fontSize='lg' mt='8' mr='6' />
          <DrawerBody>

            <Box>
              <Box mb='8' ml='-6px'>
                <LogoMobile data={data} color='neutralDark' />
              </Box>

              <Box>
                <MobileShippers color='neutralDark' />
                <MobileCarriers data={data} />
                <Box>
                  <Box mt='6'>
                    <MobileNavLink href='/page/about' label='About' color={'neutral.90'} />
                    <MobileNavLink href='/page/resources' label='Resources' color={'neutral.90'} />
                    <MobileNavLink href='/page/careers' label='Careers' color={'neutral.90'} />
                  </Box>
                </Box>
              </Box>
            </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Box>

  )
}