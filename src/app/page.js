import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import BigTextBlock from '@/_components/sections/BigTextBlock'
import ServiceCards from '@/_components/sections/ServiceCards'
import SectionTwoColumns from '@/_components/sections/section-two-columns/TwoColumnsImage'
import Badges from '@/_components/sections/single-sections/Badges'


export const metadata = {
  title: 'Kansas City\'s Top Logistics Company - Refrigerated Experts',
  description: 'We offer a complete range of logistics services, proprietary software, and industry leading customer service.',
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

        <Badges data={data.data} paddingSize='lg' />
     
      </PageContainer>
    </main>
  )
}

async function getData() {
  const res = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/homepages/1?populate[heroImage][populate]=primaryImage&populate[callToAction][populate]=true&populate[Sections][populate]=Image`, { 
    next: { revalidate: 10 }
  })
 
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

