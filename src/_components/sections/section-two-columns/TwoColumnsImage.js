import { Box } from "@chakra-ui/react";
import BodyXl from "../../typography/BodyXl";
import ContentContainer from "@/_layout/containers/ContentContainer";
import HeadlineSmall from "../../typography/HeadlineSmall";
import LabelMedium from "../../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";
import DisplaySmall from "../../typography/DisplaySmall";
import Image from "next/image";
import BodyLarge from "../../typography/BodyLarge";


export default function TwoColumnsImage({ data }) {

  // console.log('two columns right / left')
  // console.log(data)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>
        <ContentContainer>

          <Box display='flex' flexDirection={ data.type == 'imageLeft' ? "row-reverse" : "row" } >

            <Box 
              flex='3'
              mr={ data.type == 'imageRight' ? '24' : '0' }
              ml={ data.type == 'imageLeft' ? '24' : '0' }
            >
              <Box mb='6'>
                <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
              </Box>
              <Box mb='8'>
                <DisplaySmall color={data.color + '.on-surface'}>{data.Heading}</DisplaySmall>
              </Box>
              <Box className='basicTextSection' maxW='5xl'>
                <BodyLarge color={data.color + '.on-surface'} thin text={data.Body}></BodyLarge>
              </Box>
            </Box>

            <Box 
              flex='2'
              height='520px'
              width='520px'
              overflow='hidden' 
              borderRadius='1.5rem' 
            >
              <Image
                src={data.Image.data.attributes.url}
                alt=""
                width={520}
                height={520}
   
                sizes="(max-width: 768px 480px, max-width: 1200px 720px, 720px)"
              />
            </Box>

          </Box>

        </ContentContainer>
      </SectionPadding>
    </Box>

  )

}