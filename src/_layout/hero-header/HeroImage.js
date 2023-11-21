import { Box, Button } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
import DisplaySuper from "@/_components/typography/DisplaySuper";
import HeadlineMedium from "@/_components/typography/HeadlineMedium";
import HeadlineSmall from "@/_components/typography/HeadlineSmall";
import BodyXl from "@/_components/typography/BodyXl";
import Image from "next/image";


export default function HeroImage({ data }) {

  console.log('HeroImage')
  console.log(data.data.attributes.heroImage.primaryImage.data.attributes.url)

  return (
    <Box py='20'>
      <ContentContainer>
        <Image 
          src={data.data.attributes.heroImage.primaryImage.data.attributes.url}
          width={1400}
          height={800}
          objectFit='contain'
          alt=""
        />
      </ContentContainer>
    </Box>
    
  )
}