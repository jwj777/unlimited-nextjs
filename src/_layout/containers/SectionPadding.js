import { Box } from "@chakra-ui/react";


export default function SectionPadding({ data, children }) {

  let paddingTop
  let paddingBottom
  data.paddingTop == 'large' ? paddingTop = '32' : paddingTop = '24'
  data.paddingBottom == 'large' ? paddingBottom = '32' : paddingBottom = '24'

  return(

    <Box pt={paddingTop} pb={paddingBottom}>
      {children}
    </Box>

  )
}