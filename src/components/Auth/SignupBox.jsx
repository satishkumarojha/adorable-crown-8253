import React from 'react'
import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FcGoogle } from 'react-icons/fc';
  import {BsMicrosoft} from 'react-icons/bs'
  export default function SignupBox({loginWithGoogle}) {
    return (
      <Flex
        align={'center'}
        mb={12}
        justify={'center'}>
        
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={1}>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
             Get started
            </Button>
            <Button
            onClick={()=>loginWithGoogle()}
              bg={'white'}
              variant={'outline'}
              colorScheme='blue.900' 
              color={'blue.900'}
              leftIcon={<FcGoogle />}
              _hover={{
                color:'blue.400'
              }}>
             Sign up with Google
            </Button>
            <Button
              bg={'white'}
              variant={'outline'}
              colorScheme='blue.900' 
              color={'blue.900'}
              leftIcon={<BsMicrosoft />}
              _hover={{
                color:'blue.400'
              }}>
             Sign up with Microsoft
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }
