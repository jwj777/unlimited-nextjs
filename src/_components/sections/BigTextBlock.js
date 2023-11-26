import { Box } from "@chakra-ui/react";
import BodyXl from "../typography/BodyXl";
import ContentContainer from "@/_layout/containers/ContentContainer";
import HeadlineSmall from "../typography/HeadlineSmall";
import LabelMedium from "../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";


export default function BigTextBlock({ data }) {

  console.log('BigTextBlock')
  console.log(data)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>
        <Box display='flex'>

          <Box className='topblock' background='none' width='100%'></Box>
      
          <ContentContainer>
            <Box 
              background={data.color + '.surface'} 
              width='8xl'
              py='16'
              px='20'
              borderTopLeftRadius='2rem'
              borderBottomLeftRadius='2rem'
            >
              <Box mb='8'>
                <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
              </Box>
              <Box maxW='5xl'>
                <HeadlineSmall color={data.color + '.on-surface'} thin>{data.Body}</HeadlineSmall>
              </Box>
            </Box>
          </ContentContainer>
        
          <Box className='rightblock' background={data.color + '.surface'} width='100%'></Box>
          
        </Box>
      </SectionPadding>
    </Box>

  )

}