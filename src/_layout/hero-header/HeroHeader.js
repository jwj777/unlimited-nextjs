import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Hero from "./Hero";
import HeroImage from "./HeroImage";


export default function HeroHeader({ data }) {

  data.data.attributes.pageColor == 'neutralWhite' ? data.data.attributes.pageColor = 'neutralLight' : data.data.attributes.pageColor = data.data.attributes.pageColor

  return (
    <Box background={data.data.attributes.pageColor + '.background'}>
      <Header data={data} />
      <Hero data={data} />
      <HeroImage data={data} />
    </Box>
    
  )
}