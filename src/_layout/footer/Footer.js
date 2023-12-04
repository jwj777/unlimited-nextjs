'use-client'
import { Box, Button, Link } from '@chakra-ui/react';
import FooterLink from './FooterLink';
import Logo from '@/_components/brand/Logo';
import TitleSmall from '@/_components/typography/TitleSmall';
import ContentContainer from '../containers/ContentContainer';
import TitleMedium from '@/_components/typography/TitleMedium';
import LabelLarge from '@/_components/typography/LabelLarge';
import LabelMedium from '@/_components/typography/LabelMedium';
// import Link from 'next/link';


export default function Footer({ data }) {

  // console.log('Footer')
  // console.log(data)

  return (

    <Box 
      background={data?.attributes.pageColor + '.background'}
      pt='16' pb='12'
    >
      <ContentContainer>

        <Box display='flex' flexWrap='wrap' justifyContent='space-between'>

          <Box>
            <Box mb='8'>
              <Logo data={data} />
            </Box>

            <Box display='flex' flexWrap='wrap'>

              <Box mr={{ base: '0', sm: '16', md: '24' }} mb='12'>
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
                <LabelMedium color={data?.attributes.pageColor + '.on-surface'}>Carriers</LabelMedium>      
                <Box mt='6'>
                  <FooterLink href='/service/refrigerated' label='Refrigerated' data={data} />
                  <FooterLink href='/service/dry-van' label='Dry Van' data={data} />
                  <FooterLink href='/service/flatbed' label='Flatbed' data={data} />
                  <FooterLink href='/service/ltl-services' label='LTL Services' data={data} />
                  <FooterLink href='/service/software' label='Software' data={data} />
                </Box>
              </Box>

              <Box>
                <LabelMedium color={data?.attributes.pageColor + '.on-surface'}>Our Company</LabelMedium>      
                <Box mt='6'>
                  <FooterLink href='/page/about' label='About' data={data} />
                  <FooterLink href='/page/resources' label='Resources' data={data} />
                  <FooterLink href='/page/meet-the-team' label='Meet The Team' data={data} />
                  <FooterLink href='/page/careers' label='Careers' data={data} />
                </Box>
              </Box>
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