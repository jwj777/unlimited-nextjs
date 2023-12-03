import { FormLabel} from "@chakra-ui/react";

export default function LabelActiveWeb({ label, id }) {

  return (
 
    <FormLabel 
      className={styles.labelActive}
      htmlFor={id} 
      color='tertiary.60'
      background='white'
      fontWeight='600'
      fontSize={{ base: '0.75rem', sm: '0.9rem' }}
      ml='0.8rem'
      pt='3px'
      px='11px'
      position='absolute' 
      bottom={{ base: '4.4rem', sm: '5.4rem' , md: '5.4rem' }}
      left={{ base: '-7px', sm: '0' }}
      borderRadius='4px'
      animation='
      fadeup 0.2s;
      @keyframes fadeup {
        0% { transform: translateY(0.4rem); }
        100% { transform: translateY(0); }
      }'
    >
      {label}
    </FormLabel>

  );
}