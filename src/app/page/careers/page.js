import { 
  Box, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button, } from '@chakra-ui/react';
import PageContainer from '@/_layout/PageContainer';
import ContentContainer from '@/_layout/containers/ContentContainer';
import HeadlineLarge from '@/_components/typography/HeadlineLarge';
import HeadlineMedium from '@/_components/typography/HeadlineMedium';
import HeadlineSmall from '@/_components/typography/HeadlineSmall';
import BodyMedium from '@/_components/typography/BodyMedium';


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

        <Box mt='8' mb='16'>
          <HeadlineMedium>Current Job Openings</HeadlineMedium>
        </Box>

        {
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
                          <Box mb='-6px'>
                            <HeadlineSmall>{job.attributes.Title}</HeadlineSmall>
                          </Box>
                          <BodyMedium text={job.attributes.Department}></BodyMedium>
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
                          <BodyMedium text={job.attributes.Body}></BodyMedium>
                        </Box>
                        <Box mt='12'>
                          <Button size='lg'>Apply For This Position</Button>
                        </Box>
                      </AccordionPanel>
                    </Box>
                  </AccordionItem>
                </Accordion>
              </Box>
            )
          })
        }

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