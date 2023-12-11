import HeadlineMedium from "@/_components/typography/HeadlineMedium";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import BadgeItem from "./BadgeItem";
import ContentContainer from "@/_layout/containers/ContentContainer";
import SectionPadding from "@/_layout/containers/SectionPadding";



export default function Badges({ data, paddingSize }) {

  let padding
  paddingSize == 'md' ? padding = '16'
  : paddingSize == 'lg' ? padding = '36'
  : padding = '36'

  return(
    <Box bg={data.attributes.pageColor + '.background'}>
      <ContentContainer>
        <Box py={{ base: '20', md: padding }}>
          <Box 
            bg={data.attributes.pageColor + '.surface-high'} 
            borderRadius='2rem' 
            px={{ base: '6', md: '12' }} 
            pt='12' 
            pb='16'
            p='12'
          >
            <Box mb='12'>
              <HeadlineMedium color={data.attributes.pageColor + '.on-surface'}>Certifications</HeadlineMedium>
            </Box>
            <Box 
              display='flex' 
              flexWrap='wrap'
              alignItems='center'
              justifyContent='space-between'
              position='relative' 
              right='16px'
            >
              <BadgeItem
                color={data.attributes.pageColor}
                size='md'
                imageUrl='/ctpat.jpg'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='md'
                imageUrl='/duns.png'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='md'
                imageUrl='/pma.png'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='md'
                imageUrl='/smartway.png'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='md'
                imageUrl='/tia.png'
              />       
            </Box>
          </Box>
          <Box 
            bg={data.attributes.pageColor + '.surface-high'} 
            borderRadius='2rem' 
            px={{ base: '6', md: '12' }} 
            pt='12' 
            pb='16' 
            mt='8'
          >
            <Box mb='12'>
              <HeadlineMedium color={data.attributes.pageColor + '.on-surface'}>Community Partners</HeadlineMedium>
            </Box>
            <Box 
              display='flex' 
              flexWrap='wrap'
              alignItems='center'
              justifyContent='space-between'
              position='relative' 
              right='16px'
            >
              <BadgeItem
                color={data.attributes.pageColor}
                size='lg'
                imageUrl='/good-shepard.png'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='lg'
                imageUrl='/harvesters.jpg'
              />    
              <BadgeItem
                color={data.attributes.pageColor}
                size='lg'
                imageUrl='/jackms.png'
              />  
            </Box>
          </Box>
        </Box>
      </ContentContainer>
    </Box>
  )

}