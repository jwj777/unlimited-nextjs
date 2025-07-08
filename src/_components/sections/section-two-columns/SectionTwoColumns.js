import { Box } from "@chakra-ui/react";
import TwoColumnsImage from "./TwoColumnsImage";
import TwoColumnsImageLeftAlt from "./TwoColumnsImageLeftAlt";
import CarrierContactForm from "@/_components/form/CarrierContactForm";
import TwoColumnsForm from "./TwoColumnsForm";

export default function SectionTwoColumns({ data }) {

  console.log('SectionTwoColumns ', data)

  return (

    <Box>
      {
        // data.type == 'imageRight' ? <TwoColumnsImage data={data} />
        data.type == 'imageLeft' ? <TwoColumnsImage data={data} />
        : data.type == 'imageLeftAlt' ? <TwoColumnsImageLeftAlt data={data} />
        // : data.type == 'formRight' ? <CarrierContactForm />
        : data.type == 'imageRight' ? <TwoColumnsForm data={data} />
        : null  
      }
    </Box>

  )

}