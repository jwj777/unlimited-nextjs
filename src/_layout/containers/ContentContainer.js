import { Box } from "@chakra-ui/react";


export default function ContentContainer({ children }) {

  return(

    <Box display='flex' justifyContent='center'>
      <Box 
        flex='2'
        maxW={{ base: '100%', xl: '1400px' }}
      >
        {children}
      </Box>
    </Box>

  )
}