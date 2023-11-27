import { Box } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import SectionPadding from "@/_layout/containers/SectionPadding";
import BodyLarge from "../typography/BodyLarge";
import HeadlineLarge from "../typography/HeadlineLarge";


export default function BasicText({ data }) {

  console.log('BasicText')
  console.log(data)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>

          <ContentContainer>
            <Box mb='8'>
              <HeadlineLarge color={data.color + '.on-surface'}>{data.Headline}</HeadlineLarge>
            </Box>
            <Box maxW='6xl'>
              <BodyLarge text={data.Body} />
            </Box>
          </ContentContainer>
        
      </SectionPadding>
    </Box>

  )

}