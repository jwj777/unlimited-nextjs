import { Box } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import ContentColor from '@/_layout/containers/ContentColor';
import FeaturedEmployee from '@/_components/card/FeaturedEmployee';
import Employee from '@/_components/card/Employee';
import ContentContainer from '@/_layout/containers/ContentContainer';
import HeadlineMedium from '@/_components/typography/HeadlineMedium';


export default async function Team() {

  const pagedata = await getPageData();
  const data = pagedata?.[0];

  console.log('Meet The Team')
  console.log(data)
  
  return (
    <main>
      <PageContainer data={data}>
        <ContentColor data={data}>
          <ContentContainer>

            {
              data.attributes.Sections.map((section, index) => {
                return(
                  section.Featured ?
                  <FeaturedEmployee key={index} data={section} color={data.attributes.pageColor} />
                  : null
                )
              })
            }

            <Box mt='24' mb='16'>
              <HeadlineMedium color={data.attributes.pageColor + '.on-surface'}>Management Team</HeadlineMedium>
            </Box>

            <Box display='flex' flexWrap='wrap'>
              {
                data.attributes.Sections.map((section, index) => {
                  return(
                    !section.Featured ?
                    <Employee key={index} data={section} color={data.attributes.pageColor} />
                    : null
                  )
                })
              }
            </Box>
          </ContentContainer>
        </ContentColor>
      </PageContainer>
    </main>
  )
}

// export async function generateStaticParams() {
//   const services = await fetch('https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages').then((res) => res.json())

//   return services.data.map((item) => ({
//     slug: item.attributes.slug
//   }))
// }

async function getPageData() {
  try {
    // const slug = params.slug;
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=team&populate[heroImage][populate]=*
    &populate[callToAction][populate]=*
    &populate[Sections][populate]=*
    &populate[Sections][on][sections.employee][populate]=*`, { 
      next: { revalidate: 1 }
    });
    
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
