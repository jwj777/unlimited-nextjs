import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import ContentColor from '@/_layout/containers/ContentColor';
import ContentContainer from '@/_layout/containers/ContentContainer';
import TrackShipments from '@/_components/form/TrackShipments';


export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug
  let pageMeta = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=track-shipments&populate=*`).then((res) => res.json())

  return {
    title: pageMeta.data[0].attributes?.seoPageTitle,
  }
}


export default async function Contact() {

  const pagedata = await getPageData();
  const data = pagedata?.[0];
  
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
