'use client'
import { Box, Button, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';
import InputFloat from './input/inputFloat';
import SelectWrapper from './input/SelectWrapper';
import LabelMedium from '../typography/LabelMedium';
import BodyMedium from '../typography/BodyMedium';


export default function ContactForm() {

  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    !formSubmit ? setFormSubmit(true) : setFormSubmit(false)

    const data = {
      companyType: e.target.companyType.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = 'https://hooks.zapier.com/hooks/catch/8026392/3fi7xo8/';

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
        
  }

  return (

      <Box mr='0'>
        {
        !formSubmit ?
        <Box>
          <form onSubmit={handleSubmit}>
            <Box>
              <Box mb='12' maxW='md'>
                <Box mb='2'>
                  <BodyMedium color='neutral.90'>Select Your Company Type</BodyMedium>
                </Box>
                <SelectWrapper id={'companyType'} required={true}>
                  <option value='shipper'>Shipper</option>
                  <option value='carrier'>Carrier</option>
                  <option value='other'>Other</option>
                </SelectWrapper>
              </Box>
              <Box display='flex' alignItems='center' flexDirection={{ base: 'column', md: 'row' }} required={true}>
                <InputFloat width='96%' label="First Name" id={"firstName"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
                <InputFloat label="Last Name" id={"lastName"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
              </Box>
              <Box display='flex' flexDirection='column'>
                <InputFloat label="Company Name" id={"company"} type={"text"} pattern={"^[A-Za-z0-9\s\-.,&()']+$"} required={true} />
                <InputFloat label="Email" id={"email"} type={"email"} pattern={"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"} required={true} />
                <InputFloat label="Phone" id={"phone"} type={"text"} required={true} />
              </Box>
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
