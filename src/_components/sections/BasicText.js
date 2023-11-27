import { Box } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import SectionPadding from "@/_layout/containers/SectionPadding";
import BodyLarge from "../typography/BodyLarge";


export default function BasicText({ data }) {

  console.log('BasicText')
  console.log(data.Body.children)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>
        <Box display='flex'>

          <Box className='topblock' background='none' width='100%'></Box>
      
          <ContentContainer>
            <Box 
              borderTopLeftRadius='2rem'
              borderBottomLeftRadius='2rem'
            >
              <BodyLarge text={data.Body} />
            </Box>
          </ContentContainer>
        
          <Box className='rightblock' background={data.color + '.surface'} width='100%'></Box>
          
        </Box>
      </SectionPadding>
    </Box>

  )

}