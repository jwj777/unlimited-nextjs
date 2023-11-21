import { Box } from "@chakra-ui/react";
import BodyXl from "../typography/BodyXl";
import ContentContainer from "@/_layout/containers/ContentContainer";
import HeadlineSmall from "../typography/HeadlineSmall";
import LabelMedium from "../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";


export default function ServiceCards({ data }) {

  console.log(data)

  return (
    <Box background={data.backgroundColor + '.background'}>
  
      <ContentContainer>

          <SectionPadding>
          <Box mb='68'>
            <LabelMedium color={data.color + '.on-surface'}>{data.Lablel}</LabelMedium>
          </Box>
          <Box maxW='5xl'>
            <HeadlineSmall color={data.color + '.on-surface'}>{data.Heading}</HeadlineSmall>
          </Box>
          </SectionPadding>
   
        
      </ContentContainer>
    

    </Box>

  )

}