import { FormErrorMessage, FormHelperText, FormLabel, Input, FormControl, Box, Text, useDisclosure, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useState } from "react";
import LabelActive from "./LabelActive";
import LabelBase from "./LabelBase";
import FadeInLabel from "../../content/text-animation/FadeInLabel";
import LabelActiveWeb from "./LabelActiveWeb";

export default function InputFloatWeb({ label, id, type, pattern, errorMsg, width, required, inputValue }) {

  const [inputState, setInputState] = useState('empty')

  const handleOnBlur = (element) => {
    element.target.value < 1 ? setInputState("empty") : setInputState("has-value")
  }

  const handleOnFocus = (element) => {
    setInputState("focus")
    
  }

  const handleOnClick = (element, id) => {
    setInputState("focus")
    document.getElementById(id).focus();
  }

  let inputWidth
  width ? inputWidth = width : inputWidth = '100%'

  return (
 
      <FormControl mb='4'>
        <InputGroup>
          <InputLeftAddon 
            fontSize={{ base: 'md', sm: 'lg' }}
            py={{ base: '1.5rem', sm: '2.14rem' }}
            pr='1'
            bg='white'  
            color={ inputState == 'has-value' || inputState == 'focus' ? 'black' : 'gray.500' }
            borderColor='neutralVariant.50'
            borderRight='none'>
              {'https://'}
          </InputLeftAddon>
          <Input 
            type={type} id={id} 
            name={id} 
            bg='white'
            minLength="1"
            size={{ base: 'mdWeb', sm: 'lgWeb', sm: 'xlWeb' }}
            variant='lightInput'
            pl='0'
            width={inputWidth}
            pattern={pattern}
            borderLeft='none'
            onBlur={(e) => handleOnBlur(e)} 
            onFocus={e => handleOnFocus(e)} 
            isRequired={required}
          />
          
        </InputGroup>

        {
          inputState == 'has-value' || inputState == 'focus' ?
          <LabelActiveWeb label={'Website URL'} /> :  
            <FormLabel 
              htmlFor={id} 
              color='neutralVariant.50'
              fontSize={{ base: '1rem', sm: '1rem', md: '1.15rem' }}
              position='absolute'
              bottom={{ base: '2.65rem', sm: '3.3rem', md: '3.2rem' }}
              pl={{ base: '5rem', sm: '6rem' }}
              zIndex='2'
              onClick={e => handleOnClick(e, id)} 
            >
              Website Url
            </FormLabel>
        }

        <FormHelperText fontSize='1rem' height='30px' color='neutralVariant.90'>Enter as 
          <Text as='span' fontWeight='500'> &apos;example.com&apos;</Text> or 
          <Text as='span' fontWeight='500'> &apos;www.example.com&apos;</Text>
        </FormHelperText>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </FormControl>

  );
}