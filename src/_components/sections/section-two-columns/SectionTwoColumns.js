import { Box } from "@chakra-ui/react";
import TwoColumnsImageRight from "./TwoColumnsImageRight";
import TwoColumnsImageLeftAlt from "./TwoColumnsImageLeftAlt";

export default function SectionTwoColumns({ data }) {

  // console.log('two col data type')
  // console.log(data.type)

  return (

    <Box>
      {
        data.type == 'imageRight' ?
        <TwoColumnsImageRight data={data} /> :

        // section.__component == 'imageRightAlt' ?
        // <SectionTwoColumns data={data} /> :
        // null  

        // section.__component == 'imageRightAlt' ?
        // <SectionTwoColumns data={data} /> :
        // null  

        data.type == 'imageLeftAlt' ?
        <TwoColumnsImageLeftAlt data={data} /> :
        null  
       
      }
    </Box>

  )

}