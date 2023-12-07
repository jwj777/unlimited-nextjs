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

  console.log('two columns right / left')
  console.log(data)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>
        <ContentContainer>

          <Box 
            display='flex' 
            flexDirection={{ base: 'column', xl: data.type == 'imageLeft' ? "row-reverse" : "row" }}
            alignItems={{ base: 'baseline', xl: 'flex-start' }}
          >

            <Box 
              flex='3'
              mr={{ base: '0', md: '16', xl: data.type == 'imageRight' ? '24' : '0' }}
              ml={{ base: '0', md: '16', xl: data.type == 'imageLeft' ? '24' : '0' }}
              mb={{ base: '16', xl: '0' }}
            >
              <Box mb='6'>
                <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
              </Box>
              <Box mb='8'>
                <DisplaySmall color={data.color + '.on-surface'}>{data.Heading}</DisplaySmall>
              </Box>
              <Box mb='8'>
                <HeadlineSmall color={data.color + '.on-surface'} thin>{data.Subheading}</HeadlineSmall>
              </Box>
              <Box className={'basicTextSection ' + data.color} maxW='5xl'>
                <BodyLarge color={data.color + '.on-surface'} thin text={data.Body}></BodyLarge>
              </Box>
            </Box>

            <Box 
              flex='2'
              height={{ base: '100%', sm: '348px', md: '420px', lg: '320px', xl: '440px', '2xl': '480px' }}
              width={{ base: '100%', sm: '340px', md: '440px', lg: '520px' }}
              overflow='hidden' 
              position='relative'
              borderRadius='1.5rem' 
            >
              <Image
                src={data.Image.data.attributes.url}
                alt=""
                // fill
                width={520}
                height={520}
                // sizes="(max-width: 768px 520px, max-width: 1200px 420px, 720px)"
              />
            </Box>

          </Box>

        </ContentContainer>
      </SectionPadding>
    </Box>

  )

}