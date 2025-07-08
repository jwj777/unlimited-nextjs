import { FormErrorMessage, FormHelperText, FormLabel, Input, FormControl, Box } from "@chakra-ui/react";
import { useState } from "react";
import LabelActive from "./LabelActive";

export default function InputFloat({ label, id, type, pattern, errorMsg, width, required, placeholder, colorType, inputValue }) {

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
 
      <FormControl mb={{ base: '0.6rem', sm: '1rem' }}>
        <Input 
          type={type} id={id} 
          name={id} 
          bg={ colorType === 'dark' ? 'neutral.20' : 'neutral.100' }
          color={ colorType === 'dark' ? 'neutral.90' : 'neutral.10' }
          minLength="1"
          // size={{ base: 'lg', sm: 'xl' }}
          py='28px'
          // variant='lightInput'
          borderColor={ colorType === 'dark' ? 'neutral.40' : 'neutral.80' }
          width={inputWidth}
          pattern={pattern}
          onBlur={(e) => handleOnBlur(e)} 
          onFocus={e => handleOnFocus(e)} 
          isRequired={required}
        />

        {
          inputState == 'has-value' || inputState == 'focus' ? <LabelActive label={label} placeholder={placeholder} colorType={colorType} /> :  
            <FormLabel 
              htmlFor={id} 
              color={ colorType === 'dark' ? 'neutral.80' : 'neutral.40' }
              fontSize={{ base: '1rem', sm: '1.05rem', md: '1.1rem' }}
              fontWeight='400'
              position='absolute'
              bottom={{ 
                base: '0.8rem', 
                sm: '1.2rem', 
                md: placeholder ? '2.6rem' : '1.05rem' 
              }}
              pl={{ base: '1rem', sm: '1.4rem' }}
              zIndex='2'
              onClick={e => handleOnClick(e, id)} 
            >
              {label} 
            </FormLabel>
        }

        <FormHelperText>
          {
            placeholder && 
            <Box ml='1rem' mb='0.5rem'>
              {placeholder}
            </Box>
          }
        </FormHelperText>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </FormControl>

  );
}