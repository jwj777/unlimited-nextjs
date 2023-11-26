import { Box } from "@chakra-ui/react";
import BodyXl from "../../typography/BodyXl";
import ContentContainer from "@/_layout/containers/ContentContainer";
import HeadlineSmall from "../../typography/HeadlineSmall";
import LabelMedium from "../../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";
import DisplaySmall from "../../typography/DisplaySmall";
import Image from "next/image";
import BodyLarge from "../../typography/BodyLarge";


export default function TwoColumnsImageRight({ data }) {

  // console.log('two col right')
  // console.log(data)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>
        <ContentContainer>

          <Box display='flex'>
            <Box pr='16'>
              <Box mb='6'>
                <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
              </Box>
              <Box mb='8'>
                <DisplaySmall color={data.color + '.on-surface'}>{data.Heading}</DisplaySmall>
              </Box>
              <Box maxW='5xl'>
                <BodyLarge color={data.color + '.on-surface'} thin text={data.Body}></BodyLarge>
              </Box>
            </Box>
            <Box 
              // height={{ base: '280px', md: '264px', lg: '264px', xl: '400px' }} 
              height='500px'
              width='680px'
              maxW='480px' 
              overflow='hidden' 
              borderRadius='1.5rem' 
            >
              <Image
                src={data.Image.data.attributes.formats.medium.url}
                alt=""
                width={500}
                height={800}
   
                // sizes="(max-width: 768px 480px, max-width: 1200px 480px, 480px)"
              />
            </Box>
          </Box>

        </ContentContainer>
      </SectionPadding>
    </Box>

  )

}