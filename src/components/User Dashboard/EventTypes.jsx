import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiSettings2Fill } from "react-icons/ri";
import { BiLink, BiCodeAlt } from "react-icons/bi";
import EventCard from "./EventCard";
const EventTypes = () => {
  return (
    <Box mx={"25rem"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineSearch color="gray.300" />}
        />
        <Input type="text" placeholder="Filter" />
      </InputGroup>

      <Flex my={4} justifyContent={"space-between"}>
        <Flex gap={8}>
          <Avatar />
          <Heading as={"h2"} fontWeight={"normal"}>
            Username
          </Heading>
        </Flex>
        <Flex>
          <Button color={"blue.500"} rounded={"full"} borderColor={'blue.500'} variant={"outline"}>
            + New Event Type
          </Button>
          <Menu>
            <MenuButton as={Button} border={"none"} bg={"none"}>
              <RiSettings2Fill />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Box mr={2}>
                  <BiLink />
                </Box>
                Copy Link
              </MenuItem>
              <MenuItem>
                <Box mr={2}>
                  <BiCodeAlt />
                </Box>
                Add to Website
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <hr />
      <Flex justifyContent={"left"} gap={8}>
        <EventCard />
        <EventCard />
      </Flex>
    </Box>
  );
};

export default EventTypes;
