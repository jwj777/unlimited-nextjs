import { Box } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import ContentColor from '@/_layout/containers/ContentColor';
import FeaturedEmployee from '@/_components/card/FeaturedEmployee';
import Employee from '@/_components/card/Employee';
import ContentContainer from '@/_layout/containers/ContentContainer';
import HeadlineLarge from '@/_components/typography/HeadlineLarge';
import HeadlineMedium from '@/_components/typography/HeadlineMedium';


export default async function Careers({params}) {

    /* resource page data */
    const articles = await getJobs(params);
    const data = articles;
  
    /* articles */
    const resources = await getPageData();
  
    console.log('Resources')
    console.log(resources[0].attributes.pageColor)
    console.log(data)
  
  return (
    <main>
      <PageContainer data={data}>
   
          <ContentContainer>

           

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

    const resources = await response.json();

    return resources?.data;
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw new Error('Failed to fetch data');
  }
}