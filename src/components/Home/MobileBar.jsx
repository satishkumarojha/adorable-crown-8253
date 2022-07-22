import React, { useEffect } from "react";
import AOS from "aos";
import { Box, Flex, Heading, VStack, Image, Text } from "@chakra-ui/react";
import "aos/dist/aos.css";
export const MobileBar = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Flex
      data-aos={"zoom-in"}
      align={"center"}
      px={"6%"}
      direction={{ base: "column", md: "row" }}
      py={{ base: "55px", md: "70px" }}
    >
      <VStack w={"50%"} align={"flex-start"} spacing={6}>
        <Heading>
          <Text fontSize={"0.4em"} color={"blue.400"}>
            THE COURTEOUS APPROACH
          </Text>
        </Heading>
        <Heading>
          <Text fontSize={"0.8em"}>
            Delight invitees with modern
            <br /> scheduling
          </Text>
        </Heading>
        <Text
          color={"gray.600"}
          fontWeight={"medium"}
          fontSize={"1.2em"}
          lineHeight={9}
          textAlign={'left'}
        >
          Time is a precious commodity. Calendly is the courteous way to book
          meetings and other appointments, because scheduling with just a few
          clicks makes the most of everyone's time.
        </Text>
      </VStack>
      <VStack w={"50%"}>
        <Image src="https://i.ibb.co/xJwGKSj/Screenshot-12.png" alt="globe" />
      </VStack>
    </Flex>
  );
};
