import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import BigTextBlock from '@/_components/sections/BigTextBlock'
import ServiceCards from '@/_components/sections/ServiceCards'
import Sections from '@/_components/sections/Sections'
import SectionTwoColumns from '@/_components/sections/section-two-columns/TwoColumnsImageRight'


export default async function Page() {

  const data = await getData()
  const services = await getServices()

  console.log('home')
  console.log(data)

  return (
    <main>
      <PageContainer data={data.data}>

        <BigTextBlock data={data.data.attributes.Sections[0]} />


        <Box>
          <ServiceCards data={data.data.attributes.Sections[1]} services={services} />
        </Box>

        <SectionTwoColumns data={data.data.attributes.Sections[2]} />

        <Box></Box>

      </PageContainer>
    </main>
  )
}

async function getData() {
  // const res = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/homepages/1?populate[heroImage][populate]=*
  // &populate[callToAction][populate]=*
  // &populate[Sections][populate]=*`)

  const res = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/homepages/1?populate[heroImage][populate]=primaryImage&populate[callToAction][populate]=true&populate[Sections][populate]=Image`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

async function getServices() {
  const res = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/services/?populate[0]=heroImage.primaryImage&populate[1]=Sections.Image`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
