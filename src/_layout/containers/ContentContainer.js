import { Box } from "@chakra-ui/react";


export default function ContentContainer({ children }) {

  return(

    <Box display='flex' justifyContent='center'>
      <Box 
        flex='2'
        maxW={{ base: '100%', '2xl': '1400px' }}
        px={{ base: '4', sm: '6', md: '8', lg: '12', '2xl': '0' }}
      >
        {children}
      </Box>
    </Box>

  )
}