import { Box } from "@chakra-ui/react";
import BodyXl from "../typography/BodyXl";
import ContentContainer from "@/_layout/containers/ContentContainer";
import HeadlineSmall from "../typography/HeadlineSmall";


export default function BigTextBlock({ data }) {

  return (
    <Box display='flex' background={data.color + '.on-surface'}>
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
          <Box maxW='5xl'>
            <HeadlineSmall color={data.color + '.on-surface'}>{data.Body}</HeadlineSmall>
          </Box>
        </Box>
      </ContentContainer>
    
      <Box className='rightblock' background={data.color + '.background'} width='100%'></Box>
    </Box>

  )

}