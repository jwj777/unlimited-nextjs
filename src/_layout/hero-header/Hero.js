import { Box, Button } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
import DisplaySuper from "@/_components/typography/DisplaySuper";
import HeadlineMedium from "@/_components/typography/HeadlineMedium";
import HeadlineSmall from "@/_components/typography/HeadlineSmall";
import BodyXl from "@/_components/typography/BodyXl";
import LabelMedium from "@/_components/typography/LabelMedium";
import DisplayLarge from "@/_components/typography/DisplayLarge";


export default function Hero({ data }) {

  // console.log('Hero')
  // console.log(data)

  let buttonColor
  if (data?.attributes.pageColor) {
    if (data.attributes.pageColor.includes('Dark')) { 
    buttonColor = 'primaryDark' 
    } else {
      buttonColor = 'primaryLight'
    }
  }

  return (
    <Box pt={{ base: '12', md: '20' }} pb={{ base: '4', md: '16' }}>
      <ContentContainer>
        {
          <Box mb='8'>
            <LabelMedium color={data?.attributes.pageColor + '.on-surface'}>{data?.attributes.Label}</LabelMedium>
          </Box>
        }
        <Box maxW='6xl' mb='6'>
          <DisplaySuper color={data?.attributes.pageColor + '.on-surface'} thin>{data?.attributes.Headline}</DisplaySuper>
        </Box>
        <Box maxW='5xl'>
          <BodyXl color={data?.attributes.pageColor + '.on-surface'} thin>{data?.attributes.Subheading}</BodyXl>
        </Box>
        {
          data?.attributes.callToAction ? 
          <Box mt='12'>
            <Button variant={buttonColor} size='lg' href={data?.attributes.callToAction?.buttonUrl}>
              {data?.attributes.callToAction?.buttonText}
            </Button>
          </Box> 
          : null
        }
      </ContentContainer>
    </Box>
    
  )
}