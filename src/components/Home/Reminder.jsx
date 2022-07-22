import React, { useEffect } from "react";
import AOS from "aos";
import { Box, Flex, Heading, VStack,Image,Text } from "@chakra-ui/react";
import 'aos/dist/aos.css';
export const Reminder = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
  return (
    <Flex data-aos={'zoom-in'} align={'center'} px={'6%'} direction={{base:"column",md:"row"}} py={{ base: "55px", md: "80px" }}>
      <VStack w={"50%"}  align={'flex-start'} spacing={6}>
        <Heading >
          <Text fontSize={'0.4em'} color={'blue.400'}>WORKFLOW MANAGEMENT</Text>
        </Heading>
        <Heading>
          <Text fontSize={'0.8em'}>Automate reminders and follow-ups</Text>
        </Heading >
        <Text color={'gray.600'} fontWeight={'medium'} fontSize={'1.2em'} width={{base:"100%",md:'78%'}} textAlign={{base:"left",md:'justify'}}>
          Calendly puts your entire meeting workflow on autopilot, sending
          everything from reminder emails to thank you notes, so you can focus
          on the work only you can do. It’s like getting an assistant, even if
          you’re a business of one.
        </Text>
      </VStack>
      <VStack w={"50%"}>
        <Image src="https://i.ibb.co/n6db0SB/Screenshot-10.png" alt="globe"/>
      </VStack>
    </Flex>
  );
};
