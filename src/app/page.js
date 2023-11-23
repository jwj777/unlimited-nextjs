import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import BigTextBlock from '@/_components/sections/BigTextBlock'
import ServiceCards from '@/_components/sections/ServiceCards'


export default async function Page() {

  const data = await getData()
  const services = await getServices()

  return (
    <main>
      <PageContainer data={data}>

        <BigTextBlock data={data.data.attributes.Sections[0]} />


        <Box>
          <ServiceCards data={data.data.attributes.Sections[1]} services={services} />
        </Box>
        
      </PageContainer>
    </main>
  )
}

async function getData() {
  const res = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/homepages/1?populate[heroImage][populate]=*
  &populate[callToAction][populate]=*
  &populate[Sections][populate]=*
  &populate[Sections][service-cards][services]=service`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

async function getServices() {
  const res = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services/?populate=*`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
