import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import BigTextBlock from '@/_components/sections/BigTextBlock'
import ServiceCards from '@/_components/sections/ServiceCards'
import SectionTwoColumns from '@/_components/sections/section-two-columns/TwoColumnsImage'

export const metadata = {
  title: 'Best 3PL Company in Kansas City',
  description: 'We offer a complete range of logistics services, proprietary software, and industry leading customer service',
}

export default async function Home() {

  const data = await getData()
  const services = await getServices()

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

