import { Box } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import ContentColor from '@/_layout/containers/ContentColor';
import ContentContainer from '@/_layout/containers/ContentContainer';
import HeadlineLarge from '@/_components/typography/HeadlineLarge';
import ArticleCard from '@/_components/card/ArticleCard';
import FeaturedArticle from '@/_components/card/FeaturedArticle';


export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug
  let pageMeta = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=resources-data&populate=*`).then((res) => res.json())

  return {
    title: pageMeta.data[0].attributes?.seoPageTitle,
  }
}


export default async function Resources({params}) {

  /* resource page data */
  const articles = await getArticles(params);
  const data = articles;

  const sortedArticles = [...data].sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt));

  console.log("Insights Articles ", data)

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
                sortedArticles?.map((article, index) => {
                  return(
                    index == '0' ?
                    <FeaturedArticle key={index} data={article} color={resources[0]?.attributes.pageColor} />
                    : null
                  )
                })
              }


              <Box display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='stretch'>
                {
                  sortedArticles.map((article, index) => {
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
    const url = `https://unlimited-strapi-h4fgb.ondigitalocean.app/api/articles?populate[heroImage][populate]=*&populate[Sections][populate]=*`;
    console.log('[getArticles] Fetching:', url);

    const response = await fetch(url, { next: { revalidate: 60 } });
    console.log('[getArticles] Response status:', response.status);

    if (!response.ok) {
      const text = await response.text();
      console.error('[getArticles] Fetch error text:', text);
      throw new Error('Failed to fetch articles');
    }

    const json = await response.json();
    console.log('[getArticles] Fetched articles:', json?.data?.length ?? 0);

    return json?.data;
  } catch (error) {
    console.error('[getArticles] Caught error:', error);
    throw new Error('Failed to fetch articles');
  }
}


async function getPageData() {
  try {
    const url = `https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=resources-data`;
    console.log('[getPageData] Fetching:', url);

    const response = await fetch(url, { next: { revalidate: 20 } });
    console.log('[getPageData] Response status:', response.status);

    if (!response.ok) {
      const text = await response.text();
      console.error('[getPageData] Fetch error text:', text);
      throw new Error('Failed to fetch page data');
    }

    const json = await response.json();
    console.log('[getPageData] Fetched resources page:', json?.data?.[0]?.attributes?.Headline);

    return json?.data;
  } catch (error) {
    console.error('[getPageData] Caught error:', error);
    throw new Error('Failed to fetch page data');
  }
}
