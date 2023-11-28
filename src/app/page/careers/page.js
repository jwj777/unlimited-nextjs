import { Box } from '@chakra-ui/react';
import PageContainer from '@/_layout/PageContainer';
import ContentContainer from '@/_layout/containers/ContentContainer';
import HeadlineLarge from '@/_components/typography/HeadlineLarge';
import HeadlineMedium from '@/_components/typography/HeadlineMedium';


export default async function Careers({params}) {

  /* resource page data */
  const jobs = await getJobs(params);
  const data = jobs;

  /* articles */
  const careers = await getPageData();
  
  return (

    <main>
      <PageContainer data={careers[0]} jobs={data}>
        <ContentContainer>

        <Box mt='8'>
          <HeadlineMedium>Current Job Openings</HeadlineMedium>
        </Box>

        </ContentContainer>
      </PageContainer>
    </main>

  )

}


async function getJobs() {
  try {
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/jobs`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const jobs = await response.json();

    return jobs?.data;
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw new Error('Failed to fetch data');
  }
}


async function getPageData() {
  try {
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=careers`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const careers = await response.json();

    return careers?.data;
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw new Error('Failed to fetch data');
  }
}