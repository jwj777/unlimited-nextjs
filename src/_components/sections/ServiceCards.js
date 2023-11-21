import { Box } from "@chakra-ui/react";
import BodyXl from "../typography/BodyXl";
import ContentContainer from "@/_layout/containers/ContentContainer";
import HeadlineSmall from "../typography/HeadlineSmall";
import LabelMedium from "../typography/LabelMedium";


export default function ServiceCards({ data }) {

  return (
    <Box display='flex' background={data.backgroundColor + '.background'}>
      <Box className='topblock' background='none' width='100%'></Box>
  
      <ContentContainer>
        <Box 
          background={data.color + '.background'} 
          width='8xl'
          py='16'
          px='20'
          borderTopLeftRadius='2rem'
          borderBottomLeftRadius='2rem'
        >
          <Box mb='68'>
            <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
          </Box>
          <Box maxW='5xl'>
            <HeadlineSmall color={data.color + '.on-surface'}>{data.Body}</HeadlineSmall>
          </Box>
        </Box>
      </ContentContainer>
    
      <Box className='rightblock' background={data.color + '.background'} width='100%'></Box>
    </Box>

  )

}