import { Box } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import SectionPadding from "@/_layout/containers/SectionPadding";
import SectionText from "./SectionText";
import CarrierContactForm from "@/_components/form/CarrierContactForm";


export default function TwoColumnsForm({ data }) {

  // console.log('TwoColumnsForm ', data)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>
        <ContentContainer>

          <Box 
            display='flex' 
            flexDirection={{ base: 'column', xl: data.type == 'imageLeft' ? "row-reverse" : "row" }}
            alignItems={{ base: 'baseline', xl: 'flex-start' }}
          >

            <SectionText data={data} />

            <CarrierContactForm />

          </Box>

        </ContentContainer>
      </SectionPadding>
    </Box>

  )

}