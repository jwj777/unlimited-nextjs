import { Box } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import SectionPadding from "@/_layout/containers/SectionPadding";
import BodyLarge from "../typography/BodyLarge";
import HeadlineLarge from "../typography/HeadlineLarge";


export default function BasicText({ data }) {

  console.log('BasicText')
  console.log(data)

  return (

    <Box background={data.color + '.background'} className='basicTextSection'>
      <SectionPadding data={data}>

          <ContentContainer>
            { data.Headline ?
              <Box mb='8'>
                <HeadlineLarge as='h2' color={data.color + '.on-surface'}>{data.Headline}</HeadlineLarge>
              </Box>
              : null
            }
            <Box maxW='5xl'>
            <Box 
              dangerouslySetInnerHTML={{ __html: data.Body }} 
              // fontSize={{ base: '1.2rem', md: '1.4rem' }}
              // lineHeight={{ base: '152%', md: '158%' }}
              // fontWeight={weight}
              // color={color}
            ></Box>
            </Box>
          </ContentContainer>
        
      </SectionPadding>
    </Box>

  )

}