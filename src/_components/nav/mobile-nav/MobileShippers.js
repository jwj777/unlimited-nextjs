import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import MobileNavLink from './MobileNavLink'


export default function MobileShippers({ color }) {

  return (
    <Accordion defaultIndex={[1]} allowMultiple>
      <AccordionItem border='0'>
          <AccordionButton 
            color='neutral.90' 
            px='0'
            mt='4'
            _hover={{ color: 'neutral.100' }}
          >
            <Box as="span" flex='1' textAlign='left'>
              Shippers
            </Box>
            <AccordionIcon />
          </AccordionButton>
        <AccordionPanel pb={4}>
          <Box mt='6' >
            <MobileNavLink href='/service/refrigerated' label='Refrigerated' color={color} />
            <MobileNavLink href='/service/dry-van' label='Dry Van' color={color} />
            <MobileNavLink href='/service/flatbed' label='Flatbed' color={color}/>
            <MobileNavLink href='/service/ltl-services' label='LTL Services' color={color} />
            <MobileNavLink href='/service/software' label='Software' color={color} />
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}