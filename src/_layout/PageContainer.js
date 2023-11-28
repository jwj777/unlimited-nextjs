'use client'
import { Box } from "@chakra-ui/react";
import HeroHeader from "./hero-header/HeroHeader";
import Footer from "./footer/Footer";


export default function PageContainer({ data, children }) {

  return (

    <Box width='100%'>
      <HeroHeader data={data} />

        {children}
        
      <Footer data={data} />
    </Box>

  )

}