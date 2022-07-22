
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckCircleIcon } from '@chakra-ui/icons'
  import { ChevronRightIcon } from '@chakra-ui/icons'
  export default function SolutionCard({logo,heading,text}) {
    return (
      <Center py={8}>
        <Box
          maxW={'445px'}
          cursor={'pointer'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Stack spacing={7} pb={6}>
            <Text
              color={'blue.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'2em'}
              letterSpacing={1.1}>
              <img src={logo} alt="" />
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              {heading}
            </Heading>
            <Text color={'gray.500'} fontSize={'xl'} textAlign={"left"} pr={"10px"}>
            {text}
            </Text>
            <Heading>
                <Text fontSize={'xl'} color={'blue.400'} _hover={{color:"black"}}>
                    Learn more <ChevronRightIcon/>
                </Text>
            </Heading>
          </Stack>
        </Box>
      </Center>
    );
  }