import { Button, Flex, Heading, VStack,Text, Box } from "@chakra-ui/react";
import React from "react";

export const TryCalendly = () => {
  return (
    <VStack bg={'#F7FAFF'} spacing={8} py={{ base: "55px", md: "80px" }}>
      <Heading color={'blue.900'} >
        <Text fontSize={'1.6em'}>Try Calendly free</Text>
      </Heading>
      <Text fontSize={'1.4em'} color={'gray.500'}>
        After your 14-day trial of our Teams plan, enjoy the Free version of
        Calendly – forever.
      </Text>
      <Flex  direction={'column'} gap={2} justifyContent={'center'} w={'100%'}>
      <Button colorScheme={"messenger"} variant='solid' w="200px" height="65px" borderRadius="39px" margin={'auto'}>Start for free</Button>
      <Text  margin={'auto'} fontSize={'1.4em'} color={'gray.500'}>To inquire about our Enterprise plans, click <Text as={'span'} color={'#006BFF'} fontWeight={'bold'}>here.</Text></Text>
      </Flex>
    </VStack>
  );
};
