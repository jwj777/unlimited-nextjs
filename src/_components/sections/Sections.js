import { Box } from "@chakra-ui/react";
import BigTextBlock from "./BigTextBlock";
import ServiceCards from "./ServiceCards";


export default function Sections({ sections }) {

  return (

    <Box>
      {
        sections.map((section, index) => {
          return(

            section.__component == 'sections.big-text-block' ?
            <BigTextBlock key={index} data={section} /> :
        
            section.__component =='sections.service-cards' ?
            <ServiceCards key={index} data={section} /> :
            null

          )
        })
      }
    </Box>

  )

}