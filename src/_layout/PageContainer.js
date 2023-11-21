'use client'
import { Box } from "@chakra-ui/react";
import HeroHeader from "./hero-header/HeroHeader";
import Sections from "@/_components/sections/Sections";


export default function PageContainer({ data }) {

  console.log(data.data.attributes.Sections)

  return (

    <Box width='100%'>
      <HeroHeader data={data} />

      {
        data.data.attributes.Sections[0] != null ? 
        <Sections sections={data.data.attributes.Sections} /> :
        null
      }

    </Box>

  )

}