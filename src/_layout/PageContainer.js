'use client'
import { Box } from "@chakra-ui/react";
import HeroHeader from "./hero-header/HeroHeader";


export default function PageContainer({ data, children }) {

  return (

    <Box width='100%'>
      <HeroHeader data={data} />

      
      {children}
    </Box>

  )

}