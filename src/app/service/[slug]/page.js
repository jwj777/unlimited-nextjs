import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import BigTextBlock from '@/_components/sections/BigTextBlock'
import ServiceCards from '@/_components/sections/ServiceCards'
import Sections from '@/_components/sections/Sections'


export default async function Page() {

  const data = await getService()

  // console.log(data)

  return (
    <main>
      <PageContainer data={data}>

        {/* <Sections data={data} /> */}
        
      </PageContainer>
    </main>
  )
}

async function getStaticPaths() {
  const res = await fetch(process.env.API_URL + '/api/services');
  const data = await res.json();
  const services = data.data;

  console.log(services)

  const paths = services.map((item, index) => ( {
    params: {slug: item.attributes.slug}
  }));

  console.log(paths)

  return {
    paths,
    fallback: false,
  };
}

console.log(paths)

// async function getService() {
//   const slug = paths.slug;
//   const res = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services/?filters[slug]=${slug}&populate[heroImage][populate]=*
//   &populate[callToAction][populate]=*
//   &populate[Sections][populate]=*`)
 
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }
