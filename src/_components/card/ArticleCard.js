import { Box, Link, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";
import TitleMedium from "../typography/TitleMedium";
import TitleSmall from "../typography/TitleSmall";
import BodyMedium from "../typography/BodyMedium";
import DisplaySuper from "../typography/DisplaySuper";
import DisplayMedium from "../typography/DisplayMedium";
import HeadlineSmall from "../typography/HeadlineSmall";
import BodyLarge from "../typography/BodyLarge";
import LabelMedium from "../typography/LabelMedium";

export default function ArticleCard({ data, color }) {

  console.log('ArticleCard')
  console.log(data.attributes)

  // createdAt short dates
  let date = new Date(data.attributes.createdAt)
  let dateDate = date.getDate();
  let options = { month: "long" }
  let dateMonth = Intl.DateTimeFormat("en-US", options).format(date);
  let dateYear = date.getFullYear();
  let createdAtShort = dateMonth + ' ' + dateDate + ', ' + dateYear

  return(
    
    <Box mr='6' mb='6' maxW='44%'>
      <LinkBox>
        <LinkOverlay href={data.attributes.slug} />

        <Box mb='8'>
          <Box mb='8'>
            <LabelMedium color={color + '.on-surface'}>{createdAtShort}</LabelMedium>
          </Box>
          <Box> 
            <DisplayMedium color={color + '.on-surface'} thin>
              {data.attributes.Headline}
            </DisplayMedium>
          </Box>
          {
            data.attributes.Subheading ?
              <Box maxW='6xl'> 
                <BodyLarge color={color + '.on-surface'} thin>
                  {data.attributes.Subheading}
                </BodyLarge>
              </Box>
            : null
          }
        </Box>

        <Box 
          maxW={{ base: '768px', md: '800px' }}
          maxH={{ base: '440px', md: '800px' }}
          borderRadius={{ base: '1.5rem', md: '2rem' }}
          overflow='hidden'
        >
          {
            data.attributes.heroImage.primaryImage ?
            <Image
              src={data.attributes.heroImage.primaryImage.data.attributes.url}
              width={800}
              height={800}
              alt=""
              // sizes="(max-width: 768px) 100%, 280px"
            /> : null
          }
        </Box>

      </LinkBox>
    </Box>

  )

}