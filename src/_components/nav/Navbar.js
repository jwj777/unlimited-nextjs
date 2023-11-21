'use client'
import { Box } from "@chakra-ui/react";
import NavShippers from "./NavShippers";


export default function Navbar({ color }) {

  return (
    <Box display='flex'>
      <NavShippers color={color} />
    </Box>
    
  )
}