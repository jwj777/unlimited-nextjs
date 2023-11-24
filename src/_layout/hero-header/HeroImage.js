import { Box } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
import Image from "next/image";


export default function HeroImage({ data }) {

  console.log('hero image')

  return (
    <Box py='20'>
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