import { Box } from "@chakra-ui/react";


export default function ContentColor({ data, children }) {

  // console.log('ContentColor')
  // console.log(data.attributes.pageColor)

  return(

      <Box background={data.attributes.pageColor + '.background'}>
  
          {children}
  
      </Box>
  
    )

}