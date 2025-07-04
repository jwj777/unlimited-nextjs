import { Box, Image, Link, LinkBox, LinkOverlay } from "@chakra-ui/react";
import DisplayMedium from "../typography/DisplayMedium";
import BodyLarge from "../typography/BodyLarge";
import LabelMedium from "../typography/LabelMedium";

export default function ArticleCard({ data, color }) {

  // console.log('ArticleCard')
  // console.log(data.attributes)

  // createdAt short dates
  let date = new Date(data.attributes.createdAt)
  let dateDate = date.getDate();
  let options = { month: "long" }
  let dateMonth = Intl.DateTimeFormat("en-US", options).format(date);
  let dateYear = date.getFullYear();
  let createdAtShort = dateMonth + ' ' + dateDate + ', ' + dateYear

  return(
    
    <Box width={{ base: '100%', lg: '46%' }} mb='16'>
      <Box mr='6' mb='6'>
        <LinkBox>
          <LinkOverlay href={'/article/' + data.attributes.slug} />

          <Box mb='10'>
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
            maxW={{ base: '768px', md: '798px' }}
            maxH={{ base: '440px', md: '400px' }}
            borderRadius={{ base: '1.5rem', md: '2rem' }}
            overflow='hidden'
          >
            {
              data.attributes.heroImage.primaryImage ?
              <Image
                src={
                  'https://unlimited-logistics-media.s3.us-east-2.amazonaws.com/' + 
                  data.attributes.heroImage.primaryImage.data.attributes.hash + 
                  data.attributes.heroImage.primaryImage.data.attributes.ext
                }
                width={800}
                height={400}
                alt=""
                // sizes="(max-width: 768px) 100%, 280px"
              /> : null
            }
          </Box>

        </LinkBox>
      </Box>
    </Box>

  )

}