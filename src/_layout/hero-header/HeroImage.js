import { Box, Image } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
// import Image from "next/image";


export default function HeroImage({ data }) {

  // console.log('hero image')
  // console.log(data.attributes.heroImage.primaryImage)

  const imageStyle = {
    objectFit: 'cover',
    height: '540px',
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
        <Box borderRadius={{ base: '1rem', md: "2rem" }} overflow='hidden' position='relative' maxH={{ base: '300px', sm: '340px', md: imageStyle.height }}>
          {/* <Image 
            src={data.attributes.heroImage.primaryImage.data.attributes.url}
            width={1400}
            height={640}
            alt=""
            style={imageStyle}
          /> */}
          <Image 
            src={
              'https://unlimited-logistics-media.s3.us-east-2.amazonaws.com/' + 
              data.attributes.heroImage.primaryImage.data.attributes.hash + 
              data.attributes.heroImage.primaryImage.data.attributes.ext
            }
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