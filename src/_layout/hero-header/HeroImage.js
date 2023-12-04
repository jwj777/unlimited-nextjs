import { Box } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
import Image from "next/image";


export default function HeroImage({ data }) {

  // console.log('hero image')
  // console.log(data)

  const imageStyle = {
    objectFit: 'cover',
    height: '440px',
  }

  return (

    <Box 
      pt='20'
      pb='16'
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
        <Box borderRadius={{ base: '1rem', md: "2rem" }} overflow='hidden' position='relative' maxH={{ base: '300px', sm: '340px', md: '100%' }}>
          <Image 
            src={data.attributes.heroImage.primaryImage.data.attributes.url}
            width={1400}
            height={640}
            alt=""
            style={imageStyle}
          />
        </Box>
      </ContentContainer>
    </Box>
    
  )
}