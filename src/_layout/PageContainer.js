import { Box } from "@chakra-ui/react";
import HeroHeader from "./hero-header/HeroHeader";


export default function PageContainer({ data }) {

  console.log('PageContainer')
  console.log(data)

  return (

    <Box width='100%'>
      <HeroHeader data={data} />

    </Box>

  )

}