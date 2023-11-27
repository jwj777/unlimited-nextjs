import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import SectionPadding from "@/_layout/containers/SectionPadding";
import BodyMedium from "@/_components/typography/BodyMedium";
import TitleMedium from "@/_components/typography/TitleMedium";
import HeadlineLarge from "@/_components/typography/HeadlineLarge";
import BodyLarge from "@/_components/typography/BodyLarge";
import TitleLarge from "@/_components/typography/TitleLarge";


export default function LtlServiceTypes({ data }) {

  console.log('LTL Service Types')
  console.log(data)

  return (

    <Box background='neutralDark.background'>
      <SectionPadding data={data}>
        <ContentContainer>
          <Box mb='12'>
            <HeadlineLarge color={'neutralDark.on-surface'}>LTL Service Levels</HeadlineLarge>
            <BodyLarge color={'neutralDark.on-surface'}>Choose your preferred service level package to apply to the service categories below.</BodyLarge>
          </Box>

          <Box display='flex'>
        
            
              <Box display='flex'>

                <Box 
                  background={'neutralDark.surface-low'} 
                  flex='2'
                  py='10'
                  pr='24'
                  pl='12'
                  borderRadius='2rem'
                  mr={{ base: '0', xl: '12' }}
                >
                  <Box mb='8'>
                    <TitleLarge color={'primary.80'}>Platinum</TitleLarge>
                  </Box>
                  <Box maxW='5xl' color={'neutralDark.on-surface'}>
                    <BodyMedium color={'neutralDark.on-surface'} thin>
                    <UnorderedList ml='0' color='primary.90'>
                      <ListItem>Split savings agreement with proven results</ListItem>
                      <ListItem>Deep dive into supply chain with leading industry experts</ListItem>
                      <ListItem>Evaluation, and negotiation of consolidated shipping program</ListItem>
                      <ListItem>Carrier performance Score carding</ListItem>
                      <ListItem>Manage, audit, and bill pay</ListItem>
                    </UnorderedList>
                    </BodyMedium>
                  </Box>
                </Box>

                <Box 
                  background={'neutralDark.surface-low'} 
                  flex='2' 
                  py='10'
                  pr='24'
                  pl='12'
                  borderRadius='2rem'
                >
                  <Box mb='8'>
                    <TitleLarge color='#F9BC48'>Gold</TitleLarge>
                  </Box>
                  <Box maxW='5xl'>
                    <BodyMedium color={'neutralDark.on-surface'} thin>
                    <UnorderedList ml='0' color='#FFDEA9'>
                      <ListItem>Available now option with zero continued shipping obligation</ListItem>
                      <ListItem>National and Regional carriers servicing entire US and Canada</ListItem>
                      <ListItem>Unique consolidations solutions through expansive OTR network</ListItem>
                      <ListItem>Guaranteed, expedited, and time critical</ListItem>
                      <ListItem>Temperature, climate controlled, and high value</ListItem>
                    </UnorderedList>
                    </BodyMedium>
                  </Box>
                </Box>

              </Box>
            
            
          </Box>
        </ContentContainer>
      </SectionPadding>
    </Box>

  )

}