import { Box } from "@chakra-ui/react";


export default function SectionPadding({ data, children }) {

  // console.log('SectionPadding')
  // console.log(data)

  let paddingTop
  let paddingBottom
  data?.paddingTop == 'large' ? paddingTop = '36' 
  : data?.paddingTop == 'small' ? paddingTop = '8' 
  : paddingTop = '20'

  data?.paddingBottom == 'large' ? paddingBottom = '36' 
  : data?.paddingBottom == 'small' ? paddingBottom = '8' 
  : paddingBottom = '20'

  console.log(paddingTop)

  return(

    <Box pt={paddingTop} pb={paddingBottom}>
      {children}
    </Box>

  )
}