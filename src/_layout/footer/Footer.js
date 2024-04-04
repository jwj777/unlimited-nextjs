'use-client'
import { Box, Button, Link } from '@chakra-ui/react';
import FooterLink from './FooterLink';
import Logo from '@/_components/brand/Logo';
import ContentContainer from '../containers/ContentContainer';
import LabelMedium from '@/_components/typography/LabelMedium';
import BodyMedium from '@/_components/typography/BodyMedium';
// import Link from 'next/link';


export default function Footer({ data }) {

  // console.log('Footer')
  // console.log(data)

  return (

    <Box 
      background={data?.attributes.pageColor + '.background'}
      pt='20' pb='16'
    >
      <ContentContainer>

        <Box display='flex' flexWrap='wrap' justifyContent='space-between'>

          <Box>
            <Box mb='8'>
              <Logo data={data} />
            </Box>

            <Box display='flex' flexWrap='wrap'>

              <Box mr={{ base: '0', sm: '16', md: '24' }} mb='16'>
                <LabelMedium color={data?.attributes.pageColor + '.on-surface'}>Shippers</LabelMedium>      
                <Box mt='6' >
                  <FooterLink href='/service/refrigerated' label='Refrigerated' data={data} />
                  <FooterLink href='/service/dry-van' label='Dry Van' data={data} />
                  <FooterLink href='/service/flatbed' label='Flatbed' data={data} />
                  <FooterLink href='/service/ltl-services' label='LTL Services' data={data} />
                  <FooterLink href='/service/software' label='Software' data={data} />
                </Box>
              </Box>

              <Box mr='24' mb='12'>
                <FooterLink href='/page/carrier-setup' label='Carrier Setup' data={data} />
                <FooterLink href='/service/software' label='Software' data={data} />
                <FooterLink href='/page/about' label='About' data={data} />
                <FooterLink href='/page/resources' label='Resources' data={data} />
                <FooterLink href='/page/careers' label='Careers' data={data} />
              </Box>

              {/* <Box>
                <LabelMedium color={data?.attributes.pageColor + '.on-surface'}>Our Company</LabelMedium>      
                <Box mt='6'>
                  <FooterLink href='/page/about' label='About' data={data} />
                  <FooterLink href='/page/resources' label='Resources' data={data} />
                  <FooterLink href='/page/careers' label='Careers' data={data} />
                </Box>
              </Box> */}
            </Box>

            <Box display='flex' flexWrap='wrap' alignItems='center'>
              <Box mr='8' opacity='0.72' >
                <BodyMedium color={data?.attributes.pageColor + '.on-surface'} thin>© 2023 Unlimited Logistics. All Rights Reserved.</BodyMedium>
              </Box>
              <Link 
                href='/page/privacy-policy' 
                color={data?.attributes.pageColor + '.on-surface'} 
                opacity='0.80' 
                fontWeight='300'
                mr='8'
                _hover={{
                  color: data?.attributes.pageColor + '.on-surface-bright'
                }}
              >Privacy Policy</Link>
              <Link 
                href='/Unlimited-Logistics-LLC-EULA.pdf' 
                color={data?.attributes.pageColor + '.on-surface'} 
                opacity='0.80' 
                fontWeight='300'
                mr='8'
                _hover={{
                  color: data?.attributes.pageColor + '.on-surface-bright'
                }}
              >EULA</Link>
              <Link 
                href='https://transparency-in-coverage.uhc.com/' 
                color={data?.attributes.pageColor + '.on-surface'} 
                opacity='0.80' 
                fontWeight='300'
                _hover={{
                  color: data?.attributes.pageColor + '.on-surface-bright'
                }}
              >TIC UHC</Link>
            </Box>

          </Box>

          <Box mt='16'>
            <Link href='/page/contact' variant='noDeco'>
              <Button variant={data?.attributes.pageColor} size='lg'>Contact Us Today
              </Button>
              </Link>
          </Box>


        </Box>
   
      </ContentContainer>
    </Box>

  )
}