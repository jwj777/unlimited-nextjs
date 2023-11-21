import { Box, Button } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
import DisplaySuper from "@/_components/typography/DisplaySuper";
import HeadlineMedium from "@/_components/typography/HeadlineMedium";
import HeadlineSmall from "@/_components/typography/HeadlineSmall";
import BodyXl from "@/_components/typography/BodyXl";


export default function Hero({ data }) {

  return (
    <Box py='16'>
      <ContentContainer>
        <Box maxW='6xl'>
          <DisplaySuper color={data.data.attributes.pageColor + '.on-surface'}>{data.data.attributes.Headline}</DisplaySuper>
        </Box>
        <Box maxW='5xl'>
          <BodyXl color={data.data.attributes.pageColor + '.on-surface'}>{data.data.attributes.Subheading}</BodyXl>
        </Box>
        {
          data.data.attributes.callToAction ?
          <Box mt='12'>
            <Button variant="primaryLight" size='lg' href={data.data.attributes.callToAction.buttonUrl}>{data.data.attributes.callToAction.buttonText}</Button>
          </Box> :
          null
        }
      </ContentContainer>
    </Box>
    
  )
}