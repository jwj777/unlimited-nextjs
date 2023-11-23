import { Box } from "@chakra-ui/react";
import Image from "next/image";
import TitleLarge from "../typography/TitleLarge";
import BodyLarge from "../typography/BodyLarge";
import HeadlineSmall from "../typography/HeadlineSmall";
import BodyMedium from "../typography/BodyMedium";

export default function ServiceCard({ service, color }) {

  return(
    <Box width={{ base: '100%', md: '50%', lg: '436px' }} mb='12'>
      <Box >
        <Box width='436px' height='236px' overflow='hidden' borderTopEndRadius='1rem' borderTopLeftRadius='1rem' position={'relative'}>
          <Image
            src={service.attributes.Primary.data.attributes.url}
            alt=""
            fill='true'
          />
        </Box>
        <Box px='8' pt='6' pb='8' bg={color + '.surface'} borderBottomEndRadius='1.5rem' borderBottomLeftRadius='1.5rem'>
          <TitleLarge color={color + '.on-surface'}>{service.attributes.Label}</TitleLarge>
          <BodyMedium color={color + '.on-surface-dim'}>{service.attributes.Headline}</BodyMedium>
        </Box>
      </Box>
    </Box>

  )

}