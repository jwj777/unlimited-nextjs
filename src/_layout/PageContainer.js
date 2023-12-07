'use client'
import { Box } from "@chakra-ui/react";
import HeroHeader from "./hero-header/HeroHeader";
import Footer from "./footer/Footer";


export default function PageContainer({ data, children, contentType, noHero }) {

  return (

    <Box width='100%'>

      {
        noHero ?
        <HeroHeader data={data} noHero contentType={contentType} />
        : <HeroHeader data={data} contentType={contentType} />
      }
      
      

        {children}

      <Footer data={data} />
    </Box>

  )

}