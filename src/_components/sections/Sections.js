import { Box } from "@chakra-ui/react";
import BigTextBlock from "./BigTextBlock";
import SectionTwoColumns from "./section-two-columns/SectionTwoColumns";
import SmallCardList from "./SmallCardList";
import TextCardList from "./TextCardList";
import Metrics from "./Metrics";
import BasicText from "./BasicText";


export default function Sections({ data }) {

  console.log('Sections')
  console.log(data.attributes)

  return (

    data.attributes ?

    <Box>
      {
        data.attributes.Sections.map((section, index) => {
          return(

            section.__component == 'sections.big-text-block' ?
            <BigTextBlock key={index} data={section} /> :

            section.__component == 'sections.small-card-list' ?
            <SmallCardList key={index} data={section} /> :

            section.__component == 'sections.text-card-list' ?
            <TextCardList key={index} data={section} /> :

            section.__component == 'sections.metrics' ?
            <Metrics key={index} data={section} /> :

            section.__component == 'sections.basic-text' ?
            <BasicText key={index} data={section} /> :

            section.__component == 'sections.section-two-columns' ?
            <SectionTwoColumns key={index} data={section} /> :
            null

          )
        })
      }
    </Box>

    : null
    

  )

}