import { Box } from "@chakra-ui/react";
import BigTextBlock from "./BigTextBlock";


export default function Sections({ sections }) {

  console.log(sections)

  return (

    <Box>
      {
        sections.map((section, index) => {
          return(
            section.__component == 'sections.big-text-block' ?
            <BigTextBlock key={index} data={section} /> :
            null
          )
        })
      }
    </Box>

  )

}