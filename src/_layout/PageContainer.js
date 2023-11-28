'use client'
import { Box } from "@chakra-ui/react";
import HeroHeader from "./hero-header/HeroHeader";
import Footer from "./footer/Footer";


export default function PageContainer({ data, children, noHero }) {

  return (

    <Box width='100%'>
      {
        noHero ?
        <HeroHeader data={data} noHero />
        : <HeroHeader data={data} />
      }
      
        {children}

      <Footer data={data} />
    </Box>

  )

}