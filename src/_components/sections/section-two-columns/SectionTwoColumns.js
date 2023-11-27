import { Box } from "@chakra-ui/react";
import TwoColumnsImage from "./TwoColumnsImage";
import TwoColumnsImageLeftAlt from "./TwoColumnsImageLeftAlt";

export default function SectionTwoColumns({ data }) {

  // console.log('two col data type')
  // console.log(data.type)

  return (

    <Box>
      {
        data.type == 'imageRight' ?
        <TwoColumnsImage data={data} /> :

        // section.__component == 'imageRightAlt' ?
        // <SectionTwoColumns data={data} /> :
        // null  

        data.type == 'imageLeft' ?
        <TwoColumnsImage data={data} /> :

        data.type == 'imageLeftAlt' ?
        <TwoColumnsImageLeftAlt data={data} /> :
        null  
       
      }
    </Box>

  )

}