import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Heading,
  Switch,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import React from "react";

const EventForm = () => {
  return (
    <Box mx={"25rem"} p={4}>
      <Flex justifyContent={"space-between"} my={8}>
        <Button
          variant={"outline"}
          borderColor={"blue.500"}
          rounded={50}
          color={"blue.500"}
        >
          {" "}
          {"< Back"}
        </Button>
        <Heading fontWeight={"normal"}>Add Event Type</Heading>
        <Flex gap={2}>
          <Text>Your Event Type is</Text>
          <Switch id="email-alerts" />
        </Flex>
      </Flex>
      <hr />
      <FormControl border={"1px solid"} p={8}>
        <Flex my={4} justifyContent={"space-between"}>
          <Box>
            <Heading as={"h4"} fontWeight={"medium"}>
              What event is this?
            </Heading>
          </Box>
          <Flex gap={4}>
            <Button rounded={"full"}>Cancel</Button>
            <Button rounded={"full"} color={"white"} bg={"blue.500"}>
              Next
            </Button>
          </Flex>
        </Flex>
        <hr />
        <FormLabel>Event Name</FormLabel>
        <Input type="email" isRequired />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Location</FormLabel>
        <Input type="text" isRequired />
        <FormLabel>Event Type</FormLabel>
        <Select placeholder="Select event Type">
          <option value="option1">One-on-One</option>
          <option value="option2">Group</option>
          <option value="option3">Collective</option>
        </Select>
        <FormLabel>Description/Instructions</FormLabel>
        <Textarea type="textBox" isRequired minHeight={40} />
        <FormLabel>Event Link</FormLabel>
        <Input type="text" isRequired />
        <hr />

        <Flex gap={4} my={4} justifyContent={"right"}>
          <Button rounded={"full"}>Cancel</Button>
          <Button color={"white"} rounded={"full"} bg={"blue.500"}>
            Next
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default EventForm;
