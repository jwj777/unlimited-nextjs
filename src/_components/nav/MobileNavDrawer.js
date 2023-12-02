import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { FiMenu } from "react-icons/fi";
import React from 'react'
import Logo from '../brand/Logo';
import LabelMedium from '../typography/LabelMedium';
import MobileNavLink from './MobileNavLink';

export default function MobileNavDrawer({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant='menuLight'>
        <FiMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>

            <Box>
              <Box mb='8'>
                <Logo data={data} />
              </Box>

              <Box>

                <Box mr='24' mb='16'>
                  <LabelMedium color={data.attributes.pageColor + '.on-surface'}>Shippers</LabelMedium>      
                  <Box mt='6' >
                    <MobileNavLink href='/service/refrigerated' label='Refrigerated' data={data} />
                    <MobileNavLink href='/service/dry-van' label='Dry Van' data={data} />
                    <MobileNavLink href='/service/flatbed' label='Flatbed' data={data} />
                    <MobileNavLink href='/service/ltl-services' label='LTL Services' data={data} />
                    <MobileNavLink href='/service/software' label='Software' data={data} />
                  </Box>
                </Box>

                <Box mr='24' mb='16'>
                  <LabelMedium color={data.attributes.pageColor + '.on-surface'}>Carriers</LabelMedium>      
                  <Box mt='6'>
                    <MobileNavLink href='/service/refrigerated' label='Refrigerated' data={data} />
                    <MobileNavLink href='/service/dry-van' label='Dry Van' data={data} />
                    <MobileNavLink href='/service/flatbed' label='Flatbed' data={data} />
                    <MobileNavLink href='/service/ltl-services' label='LTL Services' data={data} />
                    <MobileNavLink href='/service/software' label='Software' data={data} />
                  </Box>
                </Box>

                <Box>
                  <LabelMedium color={data.attributes.pageColor + '.on-surface'}>Our Company</LabelMedium>      
                  <Box mt='6'>
                    <MobileNavLink href='/page/about' label='About' data={data} />
                    <MobileNavLink href='/page/resources' label='Resources' data={data} />
                    <MobileNavLink href='/page/meet-the-team' label='Meet The Team' data={data} />
                    <MobileNavLink href='/page/careers' label='Careers' data={data} />
                  </Box>
                </Box>
              </Box>
            </Box>

          </DrawerBody>
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}