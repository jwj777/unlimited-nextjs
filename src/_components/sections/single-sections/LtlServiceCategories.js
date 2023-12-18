import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import SectionPadding from "@/_layout/containers/SectionPadding";
import BodyMedium from "@/_components/typography/BodyMedium";
import HeadlineLarge from "@/_components/typography/HeadlineLarge";
import BodyLarge from "@/_components/typography/BodyLarge";
import TitleLarge from "@/_components/typography/TitleLarge";
import LtlTextCard from "./LtlTextCard";


export default function LtlServiceTypes({ data }) {

  // console.log('LTL Service Types')
  // console.log(data)

  return (

    <Box background='neutralDark.background'>
      <SectionPadding data={data}>
        <ContentContainer>
          <Box mb='12'>
            <HeadlineLarge color={'neutralDark.on-surface'}>LTL Service Levels</HeadlineLarge>
            <BodyLarge color={'neutralDark.on-surface'}>Choose your preferred service level package to apply to the service categories below.</BodyLarge>
          </Box>

          <Box display='flex'>
        
            
            
            
          </Box>

        </ContentContainer>
      </SectionPadding>
    </Box>

  )

}