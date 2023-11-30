import { Box, Link, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";
import TitleMedium from "../typography/TitleMedium";
import TitleSmall from "../typography/TitleSmall";
import BodyMedium from "../typography/BodyMedium";
import DisplaySuper from "../typography/DisplaySuper";
import DisplayLarge from "../typography/DisplayLarge";
import HeadlineSmall from "../typography/HeadlineSmall";
import LabelLarge from "../typography/LabelLarge";

export default function FeaturedArticle({ data, color }) {

  // console.log('ArticleCard')
  // console.log(data.attributes.heroImage)

  // createdAt short dates
  let date = new Date(data.attributes.createdAt)
  let dateDate = date.getDate();
  let options = { month: "long" }
  let dateMonth = Intl.DateTimeFormat("en-US", options).format(date);
  let dateYear = date.getFullYear();
  let createdAtShort = dateMonth + ' ' + dateDate + ', ' + dateYear

  return(
    
    <Box mb='24'>
      <LinkBox>

        <LinkOverlay href={data.attributes.slug} />

          <Box mb='12'>
            <Box mb='8'>
              <LabelLarge color={color + '.on-surface'}>{createdAtShort}</LabelLarge>
            </Box>
            <Box maxW='5xl'> 
              <DisplayLarge color={color + '.on-surface'} thin>
                {data.attributes.Headline}
              </DisplayLarge>
            </Box>
            {
              data.attributes.Subheading ?
                <Box maxW='6xl' mt='8'> 
                  <HeadlineSmall color={color + '.on-surface'} thin>
                    {data.attributes.Subheading}
                  </HeadlineSmall>
                </Box>
              : null
            }
          </Box>

          <Box 
            maxW={{ base: '768px', md: '1400px' }}
            maxH={{ base: '440px', md: '600px' }}
            borderRadius={{ base: '1.5rem', md: '2rem' }}
            overflow='hidden'
          >
            {
              data.attributes.heroImage.primaryImage ?
              <Image
                src={data.attributes.heroImage.primaryImage.data.attributes.url}
                width={1400}
                height={600}
                alt=""
                // sizes="(max-width: 768px) 100%, 280px"
              /> : null
            }
          </Box>

      </LinkBox>
    </Box>

  )

}