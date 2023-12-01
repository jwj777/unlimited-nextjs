import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Hero from "./Hero";
import HeroImage from "./HeroImage";
import HeroArticle from "./HeroArticle";


export default function HeroHeader({ data, noHero, contentType }) {

  // console.log('HeroHeader')
  // console.log(data)

  data.attributes.pageColor && data.attributes.pageColor == 'neutralWhite' ? 
  data.attributes.pageColor && data.attributes.pageColor == 'neutralLight' 
: data.attributes.pageColor = data.attributes.pageColor

  return (
    <Box background={data.attributes.pageColor + '.background'}>
      <Header data={data} />

      {
        noHero || contentType == 'article' ? null
        : <Hero data={data} />
      }

      {
        contentType == 'article' ?
        <HeroArticle data={data} />
        : null
      }
      

      {
        data.attributes.heroImage && !noHero && !contentType == 'article' ?
        <HeroImage data={data} /> 
        : null
      }
    </Box>
    
  )
}