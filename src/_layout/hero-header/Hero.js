import { Box, Button } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
import DisplaySuper from "@/_components/typography/DisplaySuper";
import HeadlineMedium from "@/_components/typography/HeadlineMedium";
import HeadlineSmall from "@/_components/typography/HeadlineSmall";
import BodyXl from "@/_components/typography/BodyXl";


export default function Hero({ data }) {

  console.log('Hero')
  console.log(data.data.attributes.callToAction)

  return (
    <Box py='20'>
      <ContentContainer>
        <Box maxW='6xl'>
          <DisplaySuper>{data.data.attributes.Headline}</DisplaySuper>
        </Box>
        <Box maxW='6xl'>
          <BodyXl>{data.data.attributes.Subheading}</BodyXl>
        </Box>
        {
          data.data.attributes.callToAction ?
          <Box mt='16'>
            <Button variant="primaryLight" size='lg' href={data.data.attributes.callToAction.buttonUrl}>{data.data.attributes.callToAction.buttonText}</Button>
          </Box> :
          null
        }
      </ContentContainer>
    </Box>
    
  )
}