import { Box } from "@chakra-ui/react";
import BodyXl from "../../typography/BodyXl";
import ContentContainer from "@/_layout/containers/ContentContainer";
import HeadlineSmall from "../../typography/HeadlineSmall";
import LabelMedium from "../../typography/LabelMedium";
import SectionPadding from "@/_layout/containers/SectionPadding";
import DisplaySmall from "../../typography/DisplaySmall";
import Image from "next/image";
import BodyLarge from "../../typography/BodyLarge";
import HeadlineLarge from "@/_components/typography/HeadlineLarge";
import BodyMedium from "@/_components/typography/BodyMedium";


export default function TwoColumnsImageLeftAlt({ data }) {

  // console.log('left alt')
  // console.log(data)

  return (

    <Box background={data.color + '.background'} mb={{ base: '0', xl: '-360px' }}>
      <SectionPadding data={data}>
        <ContentContainer>

          <Box display='flex' flexDirection={{ base: 'column', xl: 'row' }}>
            <Box pr={{ base: '0', xl: '16' }}>
              <Box mb='6'>
                <LabelMedium color={data.color + '.on-surface'}>{data.Label}</LabelMedium>
              </Box>
              <Box mb={{ base: '12', xl: '24' }} maxW='5xl'>
                <HeadlineLarge color={data.color + '.on-surface'}>{data.Heading}</HeadlineLarge>
              </Box>
              <Box>
                <Box
                  height={{ base: '180px', sm: '210px', md: '300px' }}
                  width={{ base: '100%', sm: '360px', md: '520px' }}
                  overflow='hidden' 
                  borderRadius={{ base: '1rem', md: '1.5rem' }}
                  position='relative'
                  zIndex='2'
                  ml={{ base: '0', md: '8' }}
                  mb={{ base: '12', md: '0' }}
                >
                  <Image
                    src={data.Image.data.attributes.formats.medium.url}
                    alt=""
                    width={520}
                    height={340}
                    // sizes="(max-width: 768px 480px, max-width: 1200px 480px, 480px)"
                  />
                </Box>
                <Box
                  display={{ base: 'none', md: 'block' }}
                  width='300px'
                  height='260px'
                  position='relative'
                  bottom={{ base: '0', md: '230px' }}
                  mb={{ base: '-132px', xl: '0' }}
                  zIndex='1'
                  sx={{
                    'background-image': `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='rgb(145, 144, 148)' stroke-width='2' stroke-dasharray='8%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                    'border-radius': '24px'
                  }}
                ></Box>
              </Box>
            </Box>

            <Box>
              <Box 
                className='basicTextSection' 
                maxW='7xl' 
                bg={data.color + '.surface'} 
                p={{ base: '8', md: '12' }}
                mb='16' 
                borderRadius={{ base: '1rem', md: '1.5rem' }}
                position='relative' 
                zIndex='2'
              >
                <BodyLarge color={data.color + '.on-surface'} thin text={data.Body}></BodyLarge>
              </Box>
            </Box>
          </Box>

          <Box
            display={{ base: 'none', xl: 'block' }}
            width='840px'
            height='300px'
            position='relative'
            bottom='600px'
            left='460px'
            zIndex='1'
            sx={{
              'background-image': `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='28' ry='28' stroke='rgb(145, 144, 148)' stroke-width='2' stroke-dasharray='8%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
              'border-radius': '28px',
            
            }}
          ></Box>

        </ContentContainer>
      </SectionPadding>
    </Box>

  )

}