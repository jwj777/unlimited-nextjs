import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";
import TitleLarge from "../typography/TitleLarge";
import BodyLarge from "../typography/BodyLarge";
import HeadlineSmall from "../typography/HeadlineSmall";
import BodyMedium from "../typography/BodyMedium";

export default function ServiceCard({ service, color }) {

  return(
    
    <Box width={{ base: '100%', lg: '50%', xl: '33.3%' }} mb='8'>
      <LinkBox>
        <LinkOverlay href={'/service/' + service.attributes.slug}>
          <Box mx='4'>
          
            <Box display='flex' flexDirection='column'>
              <Box height={{ base: '280px', md: '264px', lg: '264px', xl: '280px' }} overflow='hidden' borderTopEndRadius='1rem' borderTopLeftRadius='1rem' position={'relative'}>
                <Image
                  src={service.attributes.heroImage.primaryImage.data.attributes.url}
                  alt=""
                  fill
                  objectFit="cover"
                  sizes="(max-width: 768px 100%, max-width: 1200px 46%, 31%)"
                />
              </Box>
              <Box px='8' pt='6' pb='8' bg={color + '.surface'} borderBottomEndRadius='1.5rem' borderBottomLeftRadius='1.5rem' alignSelf='stretch' minH='146px'>
                <TitleLarge color={color + '.on-surface'}>{service.attributes.Label}</TitleLarge>
                <BodyMedium color={color + '.on-surface-dim'}>{service.attributes.Headline}</BodyMedium>
              </Box>
            </Box>
          </Box>
        </LinkOverlay>
      </LinkBox>
    </Box>
 

  )

}