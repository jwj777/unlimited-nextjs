import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import PageContainer from '@/_layout/PageContainer'


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
  const res = await fetch(`https://unlimited-strapi-h4fgb.ondigitalocean.app/api/homepages/1?populate[heroImage][populate]=*
  &populate[callToAction][populate]=*
  &populate[Sections][populate]=*`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
