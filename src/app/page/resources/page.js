import { Box } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import ContentColor from '@/_layout/containers/ContentColor';
import ContentContainer from '@/_layout/containers/ContentContainer';
import HeadlineLarge from '@/_components/typography/HeadlineLarge';
import ArticleCard from '@/_components/card/ArticleCard';
import FeaturedArticle from '@/_components/card/FeaturedArticle';


export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug
  let pageMeta = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=resources&populate=*`).then((res) => res.json())

  return {
    title: pageMeta.data[0].attributes?.seoPageTitle,
  }
}

export default async function Resources({params}) {

  /* resource page data */
  const articles = await getArticles(params);
  const data = articles;

  /* articles */
  const resources = await getPageData();
  
  return (
    <main>
      <PageContainer data={resources[0]} noHero>
        <ContentColor data={resources[0]}>
          <ContentContainer>
            <Box pb='24'>

              <Box display='flex' alignItems='center' mt='24' mb='24'>
                <Box 
                  borderTop='2px' 
                  borderColor={resources[0]?.attributes.pageColor + '.outline'} 
                  height='2px'
                  width='180px'
                  mr='8'
                  mb='4'
                ></Box>
                <Box>
                  <HeadlineLarge color={resources[0]?.attributes.pageColor + '.on-surface'} thin>{resources[0]?.attributes.Headline}</HeadlineLarge>
                </Box>
              </Box>

              {
                data?.map((article, index) => {
                  return(
                    index == '0' ?
                    <FeaturedArticle key={index} data={article} color={resources[0]?.attributes.pageColor} />
                    : null
                  )
                })
              }


              <Box display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='stretch'>
                {
                  data.map((article, index) => {
                    return(
                      index > 0 ?
                      <ArticleCard key={index} data={article} color={resources[0]?.attributes.pageColor} />
                      : null
                    )
                  })
                }
              </Box>


            </Box>
          </ContentContainer>
        </ContentColor>
      </PageContainer>
    </main>
  )
}


async function getArticles() {
  try {
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/articles?populate[heroImage][populate]=*
    &populate[Sections][populate]=*`, { 
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // console.log('getArticles')
    // console.log(response)

    const article = await response.json();

    return article?.data;
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw new Error('Failed to fetch data');
  }
}


async function getPageData() {
  try {
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=resources`, { next: { revalidate: 20 } });
    
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
