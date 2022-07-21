import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const RoutingForms = () => {
  return (
    <Box mx={'25rem'}>
<Flex>
<Box p={8}>
  <Heading>Connect the right people, faster</Heading>
  <Text pr={20} my={4}>Routing forms let you gather information from someone up front and direct them to a specific booking page or website based on their responses.</Text>

  <Button my={4} color={"blue.500"} rounded={"full"} borderColor={'blue.500'} variant={"outline"}>+ New Routing Room</Button>
</Box>

    <Image src='https://assets.calendly.com/packs/frontend/media/illustration_en-1f280e102d2146cbe890.svg'/>
    
    
</Flex>
    </Box>
  )
}

export default RoutingForms