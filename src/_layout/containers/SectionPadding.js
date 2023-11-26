import { Box } from "@chakra-ui/react";


export default function SectionPadding({ data, children }) {

  // console.log('SectionPadding')
  // console.log(data)

  let paddingTop
  let paddingBottom
  data.paddingTop == 'large' ? paddingTop = '36' : paddingTop = '20'
  data.paddingBottom == 'large' ? paddingBottom = '36' : paddingBottom = '20'

  return(

    <Box pt={paddingTop} pb={paddingBottom}>
      {children}
    </Box>

  )
}