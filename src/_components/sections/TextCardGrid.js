import { Box, Text } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import LabelMedium from "../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";
import HeadlineLarge from "../typography/HeadlineLarge";
import BodyLarge from "../typography/BodyLarge";
import SmallCard from "../card/SmallCard";
import TextCard from "../card/TextCard";


export default function TextCardList({ data }) {

  // console.log('TextCardList')
  // console.log(data)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>
          <ContentContainer>

            <Box>

              <Box mb='16'>
                {
                  data.Label ?
                <Box mb='8'>
                  <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
                </Box> : null
                }
                <Box maxW='3xl'>
                  <HeadlineLarge color={data.color + '.on-surface'}>{data.Heading}</HeadlineLarge>
                </Box>
                {
                  data.Subheading ?
                <Box maxW='5xl'>
                  <BodyLarge color={data.color + '.on-surface'} thin>{data.Subheading}</BodyLarge>
                </Box> : null
                }
              </Box>

              <Box display='flex' flexWrap='wrap'>
                {
                  data.textCard.map((card, index) => {
                    return(
                      <TextCard key={index} data={card} color={data.color} />
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