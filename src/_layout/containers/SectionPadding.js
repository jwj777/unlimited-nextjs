import { Box } from "@chakra-ui/react";


export default function SectionPadding({ data, children }) {

  console.log(data)

  let paddingTop
  let paddingBottom
  data.paddingTop == 'large' ? paddingTop = '32' : paddingTop = '24'
  data.paddingBottom == 'large' ? paddingBottom = '32' : paddingBottom = '24'

  console.log(paddingTop)
  console.log(paddingBottom)

  return(

    <Box pt={paddingTop} pb={paddingBottom}>
      {children}
    </Box>

  )
}