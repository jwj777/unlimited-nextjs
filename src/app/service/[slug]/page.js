import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import Sections from '@/_components/sections/Sections'
import LtlServiceTypes from '@/_components/sections/single-sections/LtlServiceTypes';


export async function generateMetadata({ params, searchParams }, parent) {

  const slug = params.slug
  let serviceMeta = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services?filters[slug][$eq]=${slug}&populate[heroImage][populate]=*`).then((res) => res.json())
 
  return {
    title: serviceMeta.data[0].attributes?.seoPageTitle,
  }
  
}


export default async function Service({params}) {

  const serviceBySlug = await getServiceBySlug(params);
  const data = serviceBySlug?.[0];

  // console.log('service/slug')
  // console.log(data)

  return (
    <main>
      <PageContainer data={data}>

        {
          data.attributes.slug == 'ltl-services' ? 
          <Box>
            <LtlServiceTypes data={data} />
          </Box>
          : null
        }

        {
          data.attributes.Sections ?
            <Sections data={data} />
          : null
        }

        
      </PageContainer>
    </main>
  )
}

export async function generateStaticParams() {
  const services = await fetch('https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services').then((res) => res.json())

  return services.data.map((item) => ({
    slug: item.attributes.slug
  }))
}

async function getServiceBySlug(params) {
  try {
    const slug = params.slug;
    const response = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services?filters[slug][$eq]=${slug}&populate[heroImage][populate]=*
    &populate[callToAction][populate]=*
    &populate[Sections][populate]=*
    &populate[Sections][on][sections.basic-text][populate]=*
    &populate[Sections][on][sections.section-two-columns][populate]=Image
    &populate[Sections][on][sections.big-text-block][populate]=*
    &populate[Sections][on][sections.small-card-list][populate][smallCard][populate]=*
    &populate[Sections][on][sections.text-card-list][populate][textCard][populate]=*
    &populate[Sections][on][sections.metrics][populate][metric][populate]=*`, { next: { revalidate: 60 } });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const service = await response.json();

    return service?.data;
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw new Error('Failed to fetch data');
  }
}
