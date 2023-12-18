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
import Badges from '@/_components/sections/single-sections/Badges';
import TrackShipments from '@/_components/form/TrackShipments';


export default async function Contact() {

  const pagedata = await getPageData();
  const data = pagedata?.[0];

  // console.log('Contact')
  // console.log(data)
  
  return (
    <main>
      <PageContainer data={data}>
        <ContentColor data={data}>
          <ContentContainer>

            <Box display='flex' flexWrap='wrap' alignItems='flex-start' pb='32' mt='12'>


              <TrackShipments />


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
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=track-shipments`);
    
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
