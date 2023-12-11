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
                imageUrl='https://unlimited-logistics-media.s3.us-east-2.amazonaws.com/ctpat_main_eb3b1aaf03.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3WRIPB2UL2GMNZ5J%2F20231208%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231208T180610Z&X-Amz-Expires=900&X-Amz-Signature=07713b399f3d684c06b0c97efc4b6fa95da172d6d14efbcb8c61d76f65cac938&X-Amz-SignedHeaders=host&x-id=GetObject'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='md'
                imageUrl='https://unlimited-logistics-media.s3.us-east-2.amazonaws.com/DUNS_801c96cd1f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3WRIPB2UL2GMNZ5J%2F20231208%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231208T180610Z&X-Amz-Expires=900&X-Amz-Signature=b827e897ba0a52e3b8b28dab5aafdb99a11e15379b9e8503e5406bcd4ef4e53e&X-Amz-SignedHeaders=host&x-id=GetObject'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='md'
                imageUrl='unlimited-logistics-media.s3.us-east-2.amazonaws.com/pma_7d4403b47b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3WRIPB2UL2GMNZ5J%2F20231208%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231208T180610Z&X-Amz-Expires=900&X-Amz-Signature=02c7500680bca8c6a562128a0b1fb7e93936053458c95995576fb5680d35db06&X-Amz-SignedHeaders=host&x-id=GetObject'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='md'
                imageUrl='unlimited-logistics-media.s3.us-east-2.amazonaws.com/Smart_Waytransparent_1440x960_6eca3a6810.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3WRIPB2UL2GMNZ5J%2F20231208%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231208T180610Z&X-Amz-Expires=900&X-Amz-Signature=bd123bb2f2a797852f0b07307296942ef5efc8214d46876c440103c2176baf1e&X-Amz-SignedHeaders=host&x-id=GetObject'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='md'
                imageUrl='/TI_Alogo_d59c4ad28f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3WRIPB2UL2GMNZ5J%2F20231208%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231208T180610Z&X-Amz-Expires=900&X-Amz-Signature=27ffcf865e76df6d3a90240a80c6560855d56e5fd44415fb459aa225babb1866&X-Amz-SignedHeaders=host&x-id=GetObject'
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
                imageUrl='https://unlimited-logistics-media.s3.us-east-2.amazonaws.com/GS_9699211828.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3WRIPB2UL2GMNZ5J%2F20231208%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231208T223055Z&X-Amz-Expires=900&X-Amz-Signature=ff5bed33e7d7a4a32693cce7274f2d496b5f28c2adb71d311d55c6ef8c927d4c&X-Amz-SignedHeaders=host&x-id=GetObject'
              />
              <BadgeItem
                color={data.attributes.pageColor}
                size='lg'
                imageUrl='https://unlimited-logistics-media.s3.us-east-2.amazonaws.com/Harvesters_Logo_e3dcf1c4b4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3WRIPB2UL2GMNZ5J%2F20231208%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231208T223055Z&X-Amz-Expires=900&X-Amz-Signature=6fdee10b932f8153d6dd6df983e37e90b08a5f816324a30807d10e3e77dcd1c9&X-Amz-SignedHeaders=host&x-id=GetObject'
              />    
              <BadgeItem
                color={data.attributes.pageColor}
                size='lg'
                imageUrl='/jackms_9afc451635.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3WRIPB2UL2GMNZ5J%2F20231208%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231208T223055Z&X-Amz-Expires=900&X-Amz-Signature=b076a82ebad053fa031aef74798701f9a2989c6729969bb89cdd7bc591403152&X-Amz-SignedHeaders=host&x-id=GetObject'
              />  
            </Box>
          </Box>
        </Box>
      </ContentContainer>
    </Box>
  )

}