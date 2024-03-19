import { Box, Text } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import LabelMedium from "../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";
import HeadlineLarge from "../typography/HeadlineLarge";
import BodyLarge from "../typography/BodyLarge";
import SmallCard from "../card/SmallCard";


export default function SmallCardList({ data }) {

  // console.log('SmallCardList')
  // console.log(data)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>
          <ContentContainer>

            <Box>

              <Box mb='16' maxW='5xl'>
                <Box mb='8'>
                  <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
                </Box>
                <Box maxW='3xl'>
                  <HeadlineLarge color={data.color + '.on-surface'}>{data.Heading}</HeadlineLarge>
                </Box>
                <Box maxW='5xl'>
                  <BodyLarge color={data.color + '.on-surface'} thin>{data.Subheading}</BodyLarge>
                </Box>
              </Box>

              <Box display='flex' flexWrap='wrap'>
                {
                  data.smallCard.map((card, index) => {
                    return(
                      <SmallCard key={index} data={card} color={data.color} />
                    )
                  })
                }
              </Box>

            </Box>

          </ContentContainer>
      </SectionPadding>
    </Box>

  )

}