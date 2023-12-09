import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import Sections from '@/_components/sections/Sections'


export default async function BasicPage({params}) {

  const serviceBySlug = await getServiceBySlug(params);
  const data = serviceBySlug?.[0];

  console.log('Basic Page')
  console.log(data)
  
  return (
    <main>
      <PageContainer data={data}>

        {
          data?.attributes.Sections ?
            data.attributes.Sections[0] ?
              <Sections data={data} />
            : null
          : null
        }
        
      </PageContainer>
    </main>
  )
}

export async function generateStaticParams() {
  const basicpages = await fetch('https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages').then((res) => res.json())

  return basicpages.data.map((item) => ({
    slug: item.attributes.slug
  }))
}

async function getServiceBySlug(params) {
  try {
    const slug = params.slug;
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/basic-pages?filters[slug][$eq]=${slug}&populate[heroImage][populate]=*
    &populate[callToAction][buttonType][populate]=*
    &populate[Sections][populate]=*
    &populate[Sections][on][sections.basic-text][populate]=*
    &populate[Sections][on][sections.section-two-columns][populate]=Image`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const basicpages = await response.json();

    return basicpages?.data;
  } catch (error) {
    console.error('Error fetching basic pages data:', error);
    throw new Error('Failed to fetch data');
  }
}
