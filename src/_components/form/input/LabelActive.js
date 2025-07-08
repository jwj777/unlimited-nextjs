import { FormLabel} from "@chakra-ui/react";

export default function LabelActive({ label, id, placeholder, colorType }) {

  return (
 
    <FormLabel 
      htmlFor={id} 
      color={ colorType === 'dark' ? 'tertiary.60' : 'tertiary.60' }
      bg={ colorType === 'dark' ? 'neutral.20' : 'neutral.100' }
      fontWeight='500'
      fontSize={{ base: '0.8rem', sm: '0.85rem' }}
      ml='0.8rem'
      pt={{ base: '2px', sm: '3px' }}
      px='12px'
      position='absolute'
      bottom={{ 
        base: placeholder ? '5.4rem' : '3.1rem', 
        sm: placeholder ? '4.6rem' : '3.1rem', 
        md: placeholder ? '4.6rem' : '3.1rem',
        lg: placeholder ? '4.6rem' : '3.0rem' 
      }}
      left={{ base: '-7px', sm: '0' }}
      borderRadius='4px'
      zIndex='3'
      transitionDuration='0.3s'
      transitionTimingFunction='ease'
      animation='
      fadeup 0.15s;
      @keyframes fadeup {
        0% { transform: translateY(0.4rem); }
        100% { transform: translateY(0); }
      }'
    >
      {label}
    </FormLabel>

  );
}