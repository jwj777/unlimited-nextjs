import { Box } from "@chakra-ui/react";
import Image from "next/image";


export default function LogoImageLight() {

  return(
    <Box>
      <Image
        src="/logo-light.png"
        width={200}
        height={60}
        alt="Unlimited Logistics Logo"
      />
    </Box>

  )

}