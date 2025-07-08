'use client'
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import InputFloat from './input/inputFloat';
import BodyLarge from '../typography/BodyLarge';


export default function TrackShipments() {

  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    !formSubmit ? setFormSubmit(true) : setFormSubmit(false)

    const data = {
      userName: e.target.userName.value,
      passWord: e.target.passWord.value,
    }

        
  }

  return (

    <Box mr='0' bg='neutral.90' p='12' pr={{ base: '12', md: '24' }} borderRadius='2rem'>
      <Box mb='6'>
        <BodyLarge>Shipment Tracking Login</BodyLarge>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box>
          <Box display='flex' flexDirection='column' width={{ base: '100%', md: '700px' }}>
            <InputFloat label="Username or Email Address" id={"userName"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
            <InputFloat label="Password" id={"password"} type={"text"} pattern={"^[A-Za-z]+$"} required={true} />
            </Box>
          </Box>
          <Button mt="0" size='lg' variant="primaryDark" type="submit">
            Login
          </Button>
        </form>
      </Box> 
    </Box> 

  )
}
