import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import ContentColor from '@/_layout/containers/ContentColor';
import FeaturedEmployee from '@/_components/card/FeaturedEmployee';
import Employee from '@/_components/card/Employee';
import ContentContainer from '@/_layout/containers/ContentContainer';
import HeadlineMedium from '@/_components/typography/HeadlineMedium';
import ContactForm from '@/_components/form/ContactForm';
import BodyLarge from '@/_components/typography/BodyLarge';
import BodyMedium from '@/_components/typography/BodyMedium';


export default async function Contact() {

  const pagedata = await getPageData();
  const data = pagedata?.[0];

  console.log('Contact')
  console.log(data)
  
  return (
    <main>
      <PageContainer data={data}>
        <ContentColor data={data}>
          <ContentContainer>

          <Box display='flex' flexWrap='wrap'>

            <Box 
              background={data.attributes.pageColor + '.surface'} 
              maxW='3xl'
              p='12'
              mr={{ base: '0', md: '12' }}
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
              <ContactForm data={data} />
            </Box>

            <Box 
              background={data.attributes.pageColor + '.surface'} 
              p='12'
              borderRadius='1.5rem'
              minW='320px'
            >

              <Box mb='8'>
                <Text color={data.attributes.pageColor + '.on-surface'}>1800 W 91 Place</Text>
                <Text color={data.attributes.pageColor + '.on-surface'}> Kansas City, MO 64114</Text>
              </Box>


              <Box>
                <Box>
                  <Text color={data.attributes.pageColor + '.on-surface'}>
                    <Text as='span' fontWeight='600'>Phone:</Text> (913) 851-4900
                    </Text>
                </Box>
                <Box>
                  <Text color={data.attributes.pageColor + '.on-surface'}>
                  <Text as='span' fontWeight='600'>Fax:</Text> (913) 851-4902
                    </Text>
                </Box>
              </Box>

              <Box mt='8'>
                <Box>
                  <Text color={data.attributes.pageColor + '.on-surface'}>
                  <Text as='span' fontWeight='600'>Email:</Text> info@unlimitedlogistics.net
                    </Text>
                </Box>
        

                <Box>
                  <Text color={data.attributes.pageColor + '.on-surface'}>
                  <Text as='span' fontWeight='600'>Billing:</Text> billing@unlimitedlogistics.net
                    </Text>
                </Box>
              </Box>
      
              
              
            </Box>

          </Box>



          </ContentContainer>
        </ContentColor>
      </PageContainer>
    </main>
  )
}


async function getPageData() {
  try {
    // const slug = params.slug;
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=contact`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const pagedata = await response.json();

    return pagedata?.data;
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw new Error('Failed to fetch data');
  }
}
