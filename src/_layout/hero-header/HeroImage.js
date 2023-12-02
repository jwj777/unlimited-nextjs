import { Box } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
import Image from "next/image";


export default function HeroImage({ data }) {

  // console.log('hero image')
  // console.log(data)

  return (

    <Box 
      py='20'
      sx={{
        background:
        `linear-gradient(
          172deg,
          var(--chakra-colors-${data.attributes.heroImage.topBgColor}-background) 0%, 
          var(--chakra-colors-${data.attributes.heroImage.topBgColor}-background) 50%, 
          var(--chakra-colors-${data.attributes.heroImage.bottomBgColor}-background) 50.1%, 
          var(--chakra-colors-${data.attributes.heroImage.bottomBgColor}-background) 100%)`
      }}
    >
      <ContentContainer>
        <Box borderRadius="2rem" overflow='hidden' maxH='680px'>
          <Image 
            src={data.attributes.heroImage.primaryImage.data.attributes.url}
            width={1400}
            height={640}
            alt=""
          />
        </Box>
      </ContentContainer>
    </Box>
    
  )
}