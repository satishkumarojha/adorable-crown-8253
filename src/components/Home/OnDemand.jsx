import React, { useEffect } from "react";
import AOS from "aos";
import { Box, Flex, Heading, VStack, Image, Text } from "@chakra-ui/react";
import "aos/dist/aos.css";
export const OnDemand = () => {
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
      <VStack w={"50%"}>
        <Image src="https://i.ibb.co/L53dnZh/Screenshot-11.png" alt="globe" />
      </VStack>
      <VStack w={"50%"} align={"flex-start"} spacing={6} pl={"10%"}>
        <Heading>
          <Text fontSize={"0.4em"} color={"blue.400"}>
            ON-DEMAND SCHEDULING
          </Text>
        </Heading>

        <Heading>
          <Text fontSize={"0.8em"}>
            Make more connections and reduce
            <br /> cancellations
          </Text>
        </Heading>
        <Text
          color={"gray.600"}
          fontWeight={"medium"}
          fontSize={"1.2em"}
          width={{ base: "100%" }}
          textAlign={{ base: "left"}}
         lineHeight={'9'}
        >
          Prospects can schedule meetings in just a few clicks – whenever the
          moment is right. And cancellations go down because rescheduling is
          easy, fast, and on their terms.
        </Text>
      </VStack>
    </Flex>
  );
};
