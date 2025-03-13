'use client'
import { Box, Button, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';
import SelectWrapper from './input/SelectWrapper';
import BodyMedium from '../typography/BodyMedium';
import { useRouter } from 'next/navigation'
import HeadlineSmall from '../typography/HeadlineSmall';
import BodyLarge from '../typography/BodyLarge';


export default function CarrierSetupSelect({ data }) {

  const router = useRouter() 

  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    !formSubmit ? setFormSubmit(true) : setFormSubmit(false)

    const data = {
      // salesRep: e.target.salesRep.value,
      salesRep: 'Website',
    }

    let baseUrl = 'https://mycarrierpackets.com/76c4b62a-b3ac-40c4-9f31-733d77ee6e09/Carrier/Intellivite/'

    if (data.salesRep) {
      router.push(baseUrl + data.salesRep)
    }

  }

  return (

    <Box 
      mr='0' mt='16'
      bg={data.attributes.pageColor + '.surface'}
      p='12' pt='10' 
      borderRadius='2rem'
      maxW='4xl'
    >
      <Box>
        <BodyLarge>Become an Unlimited Logistics Carrier Today</BodyLarge>
        <form onSubmit={handleSubmit}>
          {/* <Box>
            <Box maxW='md'>
              <Box mb='2'>
                <BodyMedium color={data.attributes.pageColor + '.on-surface'}>Select Your Sales Representative</BodyMedium>
              </Box>
              <SelectWrapper id={'salesRep'} required={true}>
                <option value="#">Unknown</option>
                <option value="alexp2">Alex Perez</option>
                <option value="andrag">Andra Getty</option>
                <option value="ajurman">Anna Jurman</option>
                <option value="asmith">Austin Smith</option>
                <option value="bwright">Blake Wright</option>
                <option value="bbrubeck">Brandy Brubeck</option>
                <option value="brendas">Brenda Simon</option>
                <option value="bbanach">Brian Banach</option>
                <option value="bnugent">Bryan Nugent</option>
                <option value="davida">David Acuna</option>
                <option value="diegoc">Diego Cardenas</option>
                <option value="dwright">Drew Wright</option>
                <option value="danderson">Dustin Anderson</option>
                <option value="figujua">Felipe Figueredo</option>
                <option value="fredp">Fred Pauk</option>
                <option value="jmoore">Jason Moore</option>
                <option value="jknox">Jeff Knox</option>
                <option value="jmack">Jeremy Mack</option>
                <option value="johnl">John Laughlin</option>
                <option value="jdouty">JR Douty</option>
                <option value="kennyc">Kenny Copeland</option>
                <option value="knightingale">Keri Nightingale</option>
                <option value="kristasl">Krista Schmid-Lee</option>
                <option value="mhanrahan">Matt Hanrahan</option>
                <option value="mmeyer">Mike Meyer</option>
                <option value="nikif">Niki Ferguson</option>
                <option value="sgardner">Semos Gardner</option>
                <option value="TylerC">Tyler Cox</option>
                <option value="zachm">Zach McCoppin</option>
              </SelectWrapper>
            </Box>
          </Box> */}
          <Button mt="6" size='lg' variant="primaryDark" type="submit">
            Carrier Setup
          </Button>
        </form>
      </Box>
    </Box> 

  )
}
