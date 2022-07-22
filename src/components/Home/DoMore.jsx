import React from 'react'
import {
    Container,
    Stack,
    Flex,
    VStack,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    useColorModeValue,
  } from '@chakra-ui/react';
export const DoMore = () => {
  return (
    <Box py={{sm:"30px",md:"70px"}}>
        <VStack spacing={6}>
            <Heading>
                <Text textAlign={'center'} color={'back'} fontSize={{base:"1.2em",md:"1.5em"}}>
                Do more of what you do best
                </Text>
            </Heading>
            <Text textAlign={'center'} fontSize={{base:'1.1em',md:'1.7em'}} color={'gray.600'}>
            With scheduling hassles and interruptions gone, your day is cleared for <br />accomplishment.
            </Text>
        </VStack>
    </Box>
  )
}
