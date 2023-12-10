import { Box } from "@chakra-ui/react";
import BodyXl from "../typography/BodyXl";
import ContentContainer from "@/_layout/containers/ContentContainer";
import HeadlineSmall from "../typography/HeadlineSmall";
import LabelMedium from "../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";
import ServiceCard from "../card/ServiceCard";
import BodyLarge from "../typography/BodyLarge";
import HeadlineLarge from "../typography/HeadlineLarge";


export default function ServiceCards({ data, services }) {

  // console.log('Service Cards')
  // console.log(services.data[0].attributes)

  return (
    <Box background={data.color + '.background'}>
  
      <ContentContainer>

          <SectionPadding data={data}>
            <Box mb='16'>
            <Box mb='6'>
              <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
            </Box>
            <Box maxW='5xl' mb='4'>
              <HeadlineLarge color={data.color + '.on-surface'}>{data.Heading}</HeadlineLarge>
            </Box>
            <Box maxW='5xl'>
              <BodyLarge color={data.color + '.on-surface'}>{data.Subheading}</BodyLarge>
            </Box>
          </Box>

          <Box display='flex' flexWrap='wrap' mx={{ base: '0', md: '-4' }} alignContent='stretch' alignItems='stretch'>
            {
              services.data.map((service, index) => {
                return(
                  service.attributes.pageCategory == 'shippers' ?
                  <ServiceCard key={index} service={service} color={data.color} />
                  : null
                )
              })
            }
          </Box>
          </SectionPadding>
     
      </ContentContainer>
    

    </Box>

  )

}