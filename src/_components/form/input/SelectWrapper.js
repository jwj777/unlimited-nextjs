import { Box, Select } from '@chakra-ui/react'


export default function SelectWrapper({ children, id, placeholder }) {

  return(

    <Select 
      placeholder={placeholder} 
      id={id}
      bg='white'
      height='60px'
      size='lg'
    >
      {children}
    </Select>

  )

}