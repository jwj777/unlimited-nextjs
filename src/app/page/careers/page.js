import { 
  Box, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Link, } from '@chakra-ui/react';
import PageContainer from '@/_layout/PageContainer';
import ContentContainer from '@/_layout/containers/ContentContainer';
import HeadlineSmall from '@/_components/typography/HeadlineSmall';
import BodyMedium from '@/_components/typography/BodyMedium';

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug
  let pageMeta = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=careers-data&populate=*`).then((res) => res.json())

  return {
    title: pageMeta.data[0].attributes?.seoPageTitle,
  }
}


export default async function Careers() {

  /* resource page data */
  const jobs = await getJobs();
  const data = jobs;

  /* articles */
  let careers = await getPageData();
  careers = careers[0]
  
  return (

    <main>
      <PageContainer data={careers}>
        <ContentContainer>

          <Box mb='40'>

            <Box mt='8' mb='12'>
              <HeadlineSmall>Current Job Openings</HeadlineSmall>
            </Box>

            {
              jobs ?
                jobs.map((job, index) => {
                  return(
                    <Box key={index} mb='8' maxW='6xl'>
                      <Accordion 
                        allowMultiple 
                        border='0px'                       
                      >
                        <AccordionItem border='0px'>
                          <Box position='relative' zIndex='2'>
                            <AccordionButton 
                              borderRadius='10rem' 
                              py='8' px='12' 
                              background='neutral.96' 
                              
                              _hover={{
                                background: 'neutral.90'
                              }}
                              _expanded={{
                                background: 'neutral.90'
                              }}
                            >
                              <Box as='span' flex='1' textAlign='left'>
                                <Box mb='1'>
                                  <HeadlineSmall>{job?.attributes.Title}</HeadlineSmall>
                                </Box>
                                <BodyMedium text={job?.attributes.Department}></BodyMedium>
                              </Box>
                              <AccordionIcon w='8' h='8' />
                            </AccordionButton>
                          </Box>
                          <Box 
                            position='relative' 
                            bottom='72px' 
                            zIndex='0'
                          >
                            <AccordionPanel 
                              borderBottomLeftRadius='4rem'
                              borderBottomEndRadius='4rem'
                              pt='28' pb='16' px='12' 
                              background='neutral.98'
                            >
                              
                                <Box maxW='4xl'>
                                  <BodyMedium text={job?.attributes.Body}></BodyMedium>
                                </Box>
                            
                      
                              <Box mt='12'>
                                <Link 
                                  href='https://tally.so/r/n97YZ1'
                                  variant='primaryLightButton' 
                                  size='lg'
                                >Apply For This Position</Link>
                              </Box>
                            </AccordionPanel>
                          </Box>
                        </AccordionItem>
                      </Accordion>
                    </Box>
                  )
                })
              : null
            }
          </Box>

        </ContentContainer>
      </PageContainer>
    </main>

  )

}


async function getJobs() {
  try {
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/jobs`, { 
      next: { revalidate: 30 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const jobs = await response.json();

    return jobs?.data;
  } catch (error) {
    console.error('Error fetching jobs data:', error);
    throw new Error('Failed to fetch data');
  }
}


async function getPageData() {
  try {
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=careers-data&populate[Sections][populate]=*`, { next: { revalidate: 20 } });
    
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