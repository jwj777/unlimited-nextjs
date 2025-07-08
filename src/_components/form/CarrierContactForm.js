"use client";

import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import InputFloat from "./input/inputFloat";
import HeadlineSmall from "../typography/HeadlineSmall";
import BodyLarge from "../typography/BodyLarge";
import { useState } from "react";

export default function CarrierContactForm() {

  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    console.log(formData)

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/8026392/u3f3mw8/", {
        method: "POST",
        body: formData,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <Box
      as="form"
      action="https://hooks.zapier.com/hooks/catch/8026392/u3f3mw8/" // Replace with your Zapier Webhook URL
      method="POST"
      onSubmit={handleSubmit}
      bg='neutral.95'
      mx="auto"
      p='2rem'
      px='2.5rem'
      borderWidth={1}
      borderColor='neutral.90'
      borderRadius="1.5rem"
    >
      {
        isSubmitted ? (
          <Box maxW='600px'>
            <BodyLarge>Thank you for your interest in working with Unlimited Logistics. A representative will contact you to complete the set up process.</BodyLarge>
          </Box>
        ) : 
 
        <Box>
          <Box mb='2rem'>
            <HeadlineSmall as="h2" size="lg" >
              Carrier Contact Form
            </HeadlineSmall>
          </Box>

          <Stack width='600px' spacing='0'>
            <InputFloat
              label="Company Name"
              id="companyName"
              name="companyName"
              type="text"
              pattern="^[A-Za-z0-9\s\-.,&()']+$"
              required
            />
            <InputFloat
              label="MC Number"
              id="mcNumber"
              name="mcNumber"
              type="number"
              required
            />
            <InputFloat
              label="DOT Number"
              id="dotNumber"
              name="dotNumber"
              type="number"
              required
            />
            <InputFloat
              label="Number of Trucks"
              id="numTrucks"
              name="numTrucks"
              type="number"
              min="1"
              required
            />
            <InputFloat
              label="Trailer Types"
              id="trailerTypes"
              name="trailerTypes"
              type="text"
              placeholder="e.g. Reefer, Dry Van, Flatbed, Hot Shot, Heavy Haul"
              required
            />
            <InputFloat
              label="Phone"
              id="phone"
              name="phone"
              type="tel"
              required
            />
            <InputFloat
              label="Email"
              id="email"
              name="email"
              type="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
            />
            <FormControl mt='0.5rem'>
              <FormLabel>Preferred Shipment Geographical Area</FormLabel>
              <CheckboxGroup>
                <Stack spacing={1}>
                  <Checkbox name="geographicalArea[]" value="Northeast">
                    Northeast
                  </Checkbox>
                  <Checkbox name="geographicalArea[]" value="Mid-Atlantic">
                    Mid-Atlantic
                  </Checkbox>
                  <Checkbox name="geographicalArea[]" value="Southeast">
                    Southeast
                  </Checkbox>
                  <Checkbox name="geographicalArea[]" value="Ohio Valley">
                    Ohio Valley
                  </Checkbox>
                  <Checkbox name="geographicalArea[]" value="Midwest">
                    Midwest
                  </Checkbox>
                  <Checkbox name="geographicalArea[]" value="Pacific Northwest">
                    Pacific Northwest
                  </Checkbox>
                  <Checkbox name="geographicalArea[]" value="West">
                    West
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>

            <FormControl mt='1.5rem'>
              <FormLabel htmlFor="reason">
                Reason for Contacting Unlimited Logistics
              </FormLabel>
              <Textarea
                id="reason"
                name="reason"
                rows={4}
                p='1rem'
                bg='neutral.100'
                placeholder="Please share any details..."
              />
            </FormControl>

            <Box>
              <Button 
                type="submit" 
                mt='1.5rem' 
                mb='1rem'
                isLoading={submitting}
                loadingText="Submitting"
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Box>  
        
    
      }

    </Box>
  );
}
