import { Heading, VStack,Text,Image } from '@chakra-ui/react'
import React from 'react'

export const BrandSlider = () => {
  return (
    <VStack bg={'#F8F8F8'} spacing={14} py={{ base: "55px", md: "120px" }}>
      <Heading>
        <Text>Simplified scheduling for more than</Text>
        <Text align={'center'}>
        <Text as={'span'} color={'#006BFF'}>10,000,000</Text> users worldwide
        </Text>
      </Heading>
      <Image src='https://i.ibb.co/3k8gB3f/Screenshot-13.png' alt='banner'/>
    </VStack>
  )
}
