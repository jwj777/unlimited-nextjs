import { Box } from "@chakra-ui/react";
import ContentContainer from "@/_layout/containers/ContentContainer";
import HeadlineSmall from "../typography/HeadlineSmall";
import LabelMedium from "../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";


export default function BigTextBlock({ data }) {

  // console.log('BigTextBlock')
  // console.log(data)

  return (

    <Box background={data.color + '.background'}>
      <SectionPadding data={data}>
        <Box display='flex'>

          <Box 
            className='topblock' 
            display={{ base: 'none', xl: 'block' }} 
            background='none' 
            width='100%'
          ></Box>
      
          <ContentContainer>
            <Box 
              background={data.color + '.surface'} 
              width={{ base: '100%', lg: '5xl', xl: '8xl' }}
              maxW={{ base: '100%', md: 'auto' }}
              py={{ base: '12', md: '14', lg: '16' }}
              px={{ base: '8', md: '14', lg: '20' }}
              borderTopLeftRadius={{ base: '1rem', md: '1.5rem', xl: '1.5' }}
              borderTopEndRadius={{ base: '1rem', md: '1.5rem', xl: '0' }}
              borderBottomLeftRadius={{ base: '1rem', md: '1.5rem', xl: '1.5' }}
              borderBottomEndRadius={{ base: '1rem', md: '1.5rem', xl: '0' }}
            >
              <Box mb='8'>
                <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
              </Box>
              <Box maxW='5xl'>
                <HeadlineSmall color={data.color + '.on-surface'} thin>{data.Body}</HeadlineSmall>
              </Box>
            </Box>
          </ContentContainer>
        
          <Box 
            className='rightblock' 
            display={{ base: 'none', xl: 'block' }}
            background={data.color + '.surface'} 
            width='100%'
          ></Box>
          
        </Box>
      </SectionPadding>
    </Box>

  )

}