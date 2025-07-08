import BodyLarge from "@/_components/typography/BodyLarge";
import DisplaySmall from "@/_components/typography/DisplaySmall";
import HeadlineSmall from "@/_components/typography/HeadlineSmall";
import LabelMedium from "@/_components/typography/LabelMedium";
import { Box } from "@chakra-ui/react";

  
export default function SectionText({ data }) {

    return(
  
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

    )

}