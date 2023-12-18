import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import Sections from '@/_components/sections/Sections'


export async function generateMetadata({ params, searchParams }, parent) {

  const slug = params.slug
  let articleMeta = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/articles?filters[slug][$eq]=${slug}`).then((res) => res.json())
 
  return {
    title: articleMeta.data[0].attributes?.Headline,
  }

}

export default async function Article({params}) {

  const articles = await getArticlesBySlug(params);
  const data = articles?.[0];

  const contentType = 'article'
  data.attributes.pageColor = 'neutralWhite'

  // console.log('Articles')
  // console.log(data)
  
  return (
    <main>
      <PageContainer data={data} contentType={contentType}>
        <Box className='articleContent'>
        
          {
            data?.attributes.Sections[0] ?
              <Sections data={data} />
            : null
          }

        </Box>
      </PageContainer>
    </main>
  )
}

export async function generateStaticParams() {
  const articles = await fetch('https://unlimited-strapi-h4fgb.ondigitalocean.app/api/articles').then((res) => res.json())

  return articles.data.map((item) => ({
    slug: item.attributes.slug
  }))
}

async function getArticlesBySlug(params) {
  try {
    const slug = params.slug;
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/articles?filters[slug][$eq]=${slug}&populate[heroImage][populate]=*
    &populate[Sections][populate]=*`, { next: { revalidate: 60 } });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const articles = await response.json();

    return articles?.data;
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw new Error('Failed to fetch data');
  }
}
