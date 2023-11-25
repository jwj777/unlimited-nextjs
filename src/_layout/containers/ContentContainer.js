import { Box } from "@chakra-ui/react";


export default function ContentContainer({ children }) {

  return(

    <Box display='flex' justifyContent='center'>
      <Box 
        flex='2'
        maxW={{ base: '100%', '2xl': '1400px' }}
        px={{ base: '4', '2xl': '0' }}
      >
        {children}
      </Box>
    </Box>

  )
}