import { Box } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
import Image from "next/image";


export default function HeroImage({ data }) {

  return (
    <Box py='20'>
      <ContentContainer>
        <Box borderRadius="2rem" overflow='hidden'>
          <Image 
            src={data.data.attributes.heroImage.primaryImage.data.attributes.url}
            width={1400}
            height={700}
            alt=""
          />
        </Box>
      </ContentContainer>
    </Box>
    
  )
}