import { FormErrorMessage, FormHelperText, FormLabel, Input, FormControl, Text } from "@chakra-ui/react";

export default function LabelBase({ label, id, type, pattern, errorMsg, width, required, handleOnFocus }) {

  return (

    <FormLabel 
      htmlFor={id} 
      color='neutralVariant.50'
      fontSize='1.15rem'
      fontWeight='400'
      position='absolute'
      bottom='1.4rem'
      pl='1.4rem'
      zIndex='2'
      onClick={e => handleOnFocus("has-value")}
    >
      {label}
    </FormLabel>

  );
}