import { Box, Text } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import LabelMedium from "../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";
import HeadlineLarge from "../typography/HeadlineLarge";
import BodyLarge from "../typography/BodyLarge";
import SmallCard from "../card/SmallCard";
import TextCard from "../card/TextCard";
import Metric from "../card/Metric";


export default function Metrics({ data }) {

  // console.log('Metrics')
  // console.log(data)

  return (

    <Box>
      <SectionPadding data={data}>
          <ContentContainer>

            <Box display='flex'>

           

                <Box flex='3' mb='16' mr='24'>
                  <Box mb='8'>
                    <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
                  </Box>
                  <Box maxW='4xl'>
                    <HeadlineLarge color={data.color + '.on-surface'}>{data.Heading}</HeadlineLarge>
                  </Box>
                  <Box maxW='6xl'>
                    <BodyLarge color={data.color + '.on-surface'} thin>{data.Subheading}</BodyLarge>
                  </Box>
                </Box>

                <Box>
                  {
                    data.metric.length > 1 ?
                    <Box display='flex' flexWrap='wrap'>
                      {
                        data.metric.map((item, index) => {
                          return(
                            <Metric key={index} data={item} color={data.color} />
                          )
                        })
                      }
                    </Box>
                    : null
                  }
                </Box>

         
              {
                data.metric.length == 1 ?
                  <Box flex='2' mt='16' mr='8' mb='8'>
                    <Metric data={data.metric[0]} color={data.color} /> 
                  </Box>
                : null
              }

            </Box>

          </ContentContainer>
      </SectionPadding>
    </Box>

  )

}