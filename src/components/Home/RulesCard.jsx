import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import HomeCards from "./HomeCards";
export const RulesCard = () => {
  return (
    <Box py={{ base: "55px", md: "70px" }}>
      <Heading textAlign={"center"} color={"blue.900"} mb={"32px"} fontSize={"5xl"}>
        <Text>We make it easy to get started</Text>
      </Heading>
      <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap={4} px={"8%"}>
        <GridItem colSpan={{base:3,md:1}}>
            <HomeCards/>
        </GridItem>
        <GridItem colSpan={{base:3,md:1}}>
        <HomeCards/>
        </GridItem>
        <GridItem colSpan={{base:3,md:1}}>
        <HomeCards/>
        </GridItem>
      </Grid>
    </Box>
  );
};
