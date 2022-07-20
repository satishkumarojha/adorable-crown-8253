import React from "react";
import { Box,Flex,Avatar,Heading } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
const EventTypes = () => {
  return (
    <Box mx={"25rem"}>
      <InputGroup>
        <InputLeftElement
            pointerEvents='none'
          children={<AiOutlineSearch color="gray.300" />}
        />
        <Input type="text" placeholder="Filter" />
      </InputGroup>

      <Flex my={4} spacing>
        <Avatar />
        <Heading as={'h2'} fontWeight={'normal'}>Username</Heading>
      </Flex>
    </Box>
  );
};

export default EventTypes;
