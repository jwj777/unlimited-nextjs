import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import BigTextBlock from '@/_components/sections/BigTextBlock'
import ServiceCards from '@/_components/sections/ServiceCards'
import Sections from '@/_components/sections/Sections'


export default async function Page() {

  const data = await getService()
  console.log(params)
  console.log(data)

  return (
    <main>
      <Text>data</Text>
      {/* <PageContainer data={data}> */}

        {/* <Sections data={data} /> */}
        
      {/* </PageContainer> */}
    </main>
  )
}

export async function generateStaticParams() {
  const services = await fetch('https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services/').then((res) => res.json())

  const test3 =  services.data.map((item) => ({
    slug: item.attributes.slug,
  }))
  console.log('test3')
  console.log(typeof test3)
  console.log(test3)
 
  return services.data.map((item) => ({
    slug: item.attributes.slug,
  }))



}

async function getService({params}) {
  const slug = params.slug
  const res = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services/${slug}`)
  const service = await res.json

  console.log('service')
  console.log(service)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return service
}
