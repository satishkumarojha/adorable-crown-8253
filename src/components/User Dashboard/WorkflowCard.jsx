import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
  Flex,
  Image,
} from "@chakra-ui/react";

export default function WorkflowCard({ head, desc, logo }) {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"300px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"xl"}
        p={4}
        textAlign={"left"}
      >
        <Image src={logo} />
        <Box my={12}>
          <Heading fontSize={"xl"} fontWeight={600}>
            {head}
          </Heading>
          <Text fontWeight={400} color={"gray.500"} mb={4}>
            {desc}
          </Text>
        </Box>

        <hr />

        <Stack mt={2} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            color={"white"}
            variant={"solid"}
            bgColor={"blue.500"}
          >
            Use Workflow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
