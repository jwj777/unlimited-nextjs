import { Box, Link, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import ContentColor from '@/_layout/containers/ContentColor';
import ContentContainer from '@/_layout/containers/ContentContainer';
import ContactForm from '@/_components/form/ContactForm';
import BodyLarge from '@/_components/typography/BodyLarge';
import Badges from '@/_components/sections/single-sections/Badges';
import TitleLarge from '@/_components/typography/TitleLarge';


export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug
  let pageMeta = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=contact&populate=*`).then((res) => res.json())

  return {
    title: pageMeta.data[0].attributes?.seoPageTitle,
  }
}


export default async function Contact() {

  const pagedata = await getPageData();
  const data = pagedata?.[0];

  // console.log('Contact')
  // console.log(data)
  
  return (
    <main>
      <PageContainer data={data}>
        <Box className='renderTestA'></Box>
        <ContentColor data={data}>
        <Box className='renderTestB'></Box>
          <ContentContainer>
          <Box className='renderTestC'></Box>
          <Box display='flex' flexWrap='wrap' alignItems='flex-start' pb='32' mt='12'>

            <Box 
              background={data.attributes.pageColor + '.surface'} 
              maxW='3xl'
              px={{ base: '8', lg: '12' }}
              pt={{ base: '12', lg: '12' }}
              pb={{ base: '12', lg: '20' }}
              mr={{ base: '0', md: '12' }}
              mb='12'
              borderRadius='1.5rem'
              >
              <Box mb='12' maxW='2xl'>
                <BodyLarge 
                  color={data.attributes.pageColor + '.on-surface'} 
                  thin
                >
                  Get in touch with one of our specialists and we	&apos;ll provide a solution to your logistics challenges
                </BodyLarge>
              </Box>  
              <ContactForm />
            </Box>

            <Box maxW='400px'>

              <Box 
                background={data.attributes.pageColor + '.surface'} 
                p={{ base: '8', lg: '12' }}
                pt={{ base: '6', lg: '10' }}
                pb={{ base: '10', lg: '14' }}
                borderRadius='1.5rem'
                minW='320px'
                mb='8'
              >
                <TitleLarge color={data.attributes.pageColor + '.on-surface'} >Download Our Credit Applciation</TitleLarge>
                <Box mt='8'>
                  <Link href='https://unlimited-logistics-media.s3.us-east-2.amazonaws.com/UL_Customer_Credit_Application_28hcs8c9w_fb1ce92702.pdf' variant='primaryDarkButton'>Download Application</Link>
                </Box>
              </Box>

              <Box 
                background={data.attributes.pageColor + '.surface'} 
                p={{ base: '8', lg: '12' }}
                pb={{ base: '12', lg: '20' }}
                borderRadius='1.5rem'
                minW='320px'
              >

                <Box mb='8'>
                  <Text color={data.attributes.pageColor + '.on-surface'} fontSize='lg' fontWeight='600' mb='1'>Kansas City Office</Text>
                  <Text color={data.attributes.pageColor + '.on-surface'}>1800 W 91 Place</Text>
                  <Text color={data.attributes.pageColor + '.on-surface'}>Kansas City, MO 64114</Text>
                  <Box mt='1'>
                    <Text color={data.attributes.pageColor + '.on-surface'} fontWeight='300'>
                      <Text as='span' fontWeight='600' mr='2'>Phone:</Text> 
                      <Link href="tel:19138514900" color='primary.90' variant=''>(913) 851-4900</Link>
                      </Text>
                  </Box>
                  <Box mt='1'>
                    <Text color={data.attributes.pageColor + '.on-surface'} fontWeight='300'>
                    <Text as='span' fontWeight='600'>Fax:</Text> (913) 851-4902
                      </Text>
                  </Box>
                </Box>

                <Box mt='8' mb='8'>
                  <Box mb='2'>
                    <Text color={data.attributes.pageColor + '.on-surface'} fontWeight='300'>
                    <Text as='span' fontWeight='600'>Email:</Text> info@unlimitedlogistics.com
                      </Text>
                  </Box>
          
                </Box>

                <Box mb='8'>
                  <Text color={data.attributes.pageColor + '.on-surface'} fontSize='lg' fontWeight='600' mb='1'>Arizona Office</Text>
                  <Text color={data.attributes.pageColor + '.on-surface'}>879 E Frontage Rd</Text>
                  <Text color={data.attributes.pageColor + '.on-surface'}>Rio Rico, Arizona 85648</Text>
                </Box>


              </Box>
              
              
            </Box>

          </Box>

          <Badges data={data} paddingSize='md' />



          </ContentContainer>
        </ContentColor>
      </PageContainer>
    </main>
  )
}


async function getPageData() {
  try {
    // const slug = params.slug;
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=contact`, { next: { revalidate: 20 } });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const pagedata = await response.json();

    return pagedata?.data 

  } catch (error) {
    console.error('Error fetching service data:', error);
    throw new Error('Failed to fetch data');
  }
}
