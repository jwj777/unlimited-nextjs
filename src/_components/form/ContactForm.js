'use client'
import { Box, Button, Checkbox, Text } from '@chakra-ui/react';
import { useState } from 'react';
import InputFloat from './input/inputFloat';
import { sendGTMEvent } from '@next/third-parties/google'

export default function ContactForm() {

  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    !formSubmit ? setFormSubmit(true) : setFormSubmit(false)

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      smsConsent: e.target.smsConsent.checked,
      sourcePage: window.location.pathname,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');

      if (data.email && data.phone) {
        sendGTMEvent({ event: 'contact_form_lead', value: 'form_submit' })
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setFormSubmit(false);
      return;
    }
        
  }

  let colorType = 'dark'

  return (

      <Box mr='0'>
        {
        !formSubmit ?
        <Box>
          <form onSubmit={handleSubmit}>
            <Box>
              <Box 
                display='flex' 
                alignItems='center' 
                flexDirection={{ base: 'column', md: 'row' }} 
                required={true} 
                colorType={colorType}
                gap='1.5rem'
              >
                <InputFloat label="First Name" id={"firstName"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} colorType={colorType} />
                <InputFloat label="Last Name" id={"lastName"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} colorType={colorType} />
              </Box>
              <Box display='flex' flexDirection='column'>
                <InputFloat label="Company Name" id={"company"} type={"text"} pattern={"^[A-Za-z0-9\s\-.,&()']+$"} required={true} colorType={colorType} />
                <InputFloat label="Email" id={"email"} type={"email"} pattern={"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"} required={true} colorType={colorType} />
                <InputFloat label="Phone" id={"phone"} type={"text"} required={true} colorType={colorType} />
              </Box>
              <Checkbox id='smsConsent' mt='1' mb='2'>
                <Text color='neutral.90' lineHeight='1.3rem' fontSize='lg' pt='2px' ml='2px'>{'Opt-In to Receive SMS Text Messages'}</Text>
              </Checkbox>
              <Text color='neutral.70' lineHeight='1.3rem' fontSize='md' pt='6px' ml='2px'>{'At any point Reply "STOP" to stop receiving text messages.'}</Text>
            </Box>
            <Button mt="8" size='lg' variant="primaryDark" type="submit">
              Let&apos;s Get Started
            </Button>
          </form>
        </Box> :
        <Box pt='8' pb='12'>

          <Text fontSize='3xl' mb='6' fontWeight='500' color={'primary.90'}>Thank you for contacting us!</Text>
          
          <Text fontSize='2xl' fontWeight='500' color={'primary.90'}>We have received your information and 
          will review your message and respond as quickly as possible.</Text>
          
        </Box>
        }
      </Box> 

  )
}
