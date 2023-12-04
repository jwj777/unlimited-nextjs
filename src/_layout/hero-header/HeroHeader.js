import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Hero from "./Hero";
import HeroImage from "./HeroImage";
import HeroArticle from "./HeroArticle";
import HeaderMobile from "./HeaderMobile";


export default function HeroHeader({ data, noHero, contentType }) {

  console.log('HeroHeader')
  console.log(data)

//   data.attributes.pageColor && data.attributes.pageColor == 'neutralWhite' ? 
//   data.attributes.pageColor && data.attributes.pageColor == 'neutralLight' 
// : data.attributes.pageColor = data.attributes.pageColor

  return (
    <Box 
      // background={ data.attributes.pageColor + '.background' }
    >
      
      <Box display={{ base: 'none', xl: 'block' }}>
        <Header data={data} />
      </Box>      
      
      <Box display={{ base: 'block', xl: 'none' }}>
        <HeaderMobile data={data} />
      </Box>

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
        // data.attributes.heroImage ?
          data?.attributes.heroImage && !noHero && (!contentType || !contentType == 'article') ?
          <HeroImage data={data} /> 
          : null
        // : null
      }

    </Box>
    
  )
}