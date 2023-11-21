import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'
import Hero from '@/_layout/hero-header/Hero'
import HeadlineLarge from '@/_components/typography/HeadlineLarge'


export default async function Page() {

  const data = await getData()

  return (
    <main>
      <PageContainer data={data}>

      </PageContainer>
    </main>
  )
}



async function getData() {
  const res = await fetch('https://unlimited-strapi-h4fgb.ondigitalocean.app/api/homepages/1?populate[1]=heroImage.primaryImage&populate[2]=callToAction')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
