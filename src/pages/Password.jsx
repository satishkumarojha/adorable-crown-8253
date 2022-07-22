import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
export default function Password(){
  return (
    <>
    <Flex
     mt={{base:"70px",md:"150px"}}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Text
        fontWeight={'bold'}
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          Enter your password.
        </Text>
        <FormControl id="email">
          <Input
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
          ml={'auto'}
          w={'100px'}
          borderRadius={'40px'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Continue
          </Button>
        </Stack>
      </Stack>
    </Flex>
    <VStack>
      <Text>I forgot my password. Please <Text as={'span'} color={'blue.500'} cursor={'pointer'}>send me a recovery email.</Text></Text>
      <Text>Don't have an account? <Text as={'span'} color={'blue.500'} cursor={'pointer'}>Sign up.</Text></Text>
      <Text color={'blue.500'} cursor={'pointer'}>English <ChevronDownIcon/></Text>
    </VStack>
    </>
  );
}