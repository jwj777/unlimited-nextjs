import { Box, Button, Image } from "@chakra-ui/react";
import ContentContainer from "../containers/ContentContainer";
import DisplaySuper from "@/_components/typography/DisplaySuper";
import HeadlineMedium from "@/_components/typography/HeadlineMedium";
import HeadlineSmall from "@/_components/typography/HeadlineSmall";
import BodyXl from "@/_components/typography/BodyXl";
import LabelMedium from "@/_components/typography/LabelMedium";
import DisplayLarge from "@/_components/typography/DisplayLarge";


export default function HeroArticle({ data }) {

  // console.log('HeroArticle')
  // console.log(data)

  let buttonColor
  buttonColor = 'primaryLight'
  // if (data.attributes.pageColor.includes('Dark')) {
  //   buttonColor = 'primaryDark'
  // } else {
  //   buttonColor = 'primaryLight'
  // }

  // createdAt short dates
  let date = new Date(data.attributes.createdAt)
  let dateDate = date.getDate();
  let options = { month: "long" }
  let dateMonth = Intl.DateTimeFormat("en-US", options).format(date);
  let dateYear = date.getFullYear();
  let createdAtShort = dateMonth + ' ' + dateDate + ', ' + dateYear

  return (
    <Box pt='20'>
      <ContentContainer>
        <Box mb='16'>
          <Box mb='8'>
            <LabelMedium color={data?.attributes.pageColor + '.on-surface'}>{createdAtShort}</LabelMedium>
          </Box>
          <Box maxW='6xl' mb='6'>
            <DisplaySuper color={data?.attributes.pageColor + '.on-surface'} thin>{data?.attributes.Headline}</DisplaySuper>
          </Box>
          <Box maxW='5xl'>
            <BodyXl color={data?.attributes.pageColor + '.on-surface'} thin>{data?.attributes.Subheading}</BodyXl>
          </Box>
        </Box>

        <Box>
          <ContentContainer>
            <Box borderRadius="2rem" overflow='hidden' maxH='560px'>
              <Image 
                src={
                  'https://unlimited-logistics-media.s3.us-east-2.amazonaws.com/' + 
                  data.attributes.heroImage.primaryImage.data.attributes.hash + 
                  data.attributes.heroImage.primaryImage.data.attributes.ext
                } 
                objectFit={'cover'}
                width={1440}
                height={560}
                alt=""
              />
            </Box>
          </ContentContainer>
        </Box>

      </ContentContainer>
    </Box>
    
  )
}