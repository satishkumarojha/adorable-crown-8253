
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
export default function HomeCards() {
  return (
    <Center py={8}>
      <Box
        maxW={'445px'}
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
            <CheckCircleIcon/>
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Create simple rules
          </Heading>
          <Text color={'gray.500'} fontSize={'xl'} textAlign={"left"} pr={"10px"}>
          Let Calendly know your availability preferences and it'll do the work for you.
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}