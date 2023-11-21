import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Hero from "./Hero";
import HeroImage from "./HeroImage";


export default function HeroHeader({ data }) {

  return (
    <Box>
      <Header />
      <Hero data={data} />
      <Text>saodjifhsdkjf</Text>
      <HeroImage data={data} />
      <Text>saodjifhsdkjf</Text>
    </Box>
    
  )
}