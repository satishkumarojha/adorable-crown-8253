// import Image from 'next/image';
import {
    Image,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Par3(props) {
    let a = props.myImag;
    console.log( a)
  return (
    <Center p={[1,2,4]}>
      <Box
        maxW={'445px'}
        w={[210,300,400]}
        h={[500 ,600,520]}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={[4,4,4]}
        overflow={'hidden'}>
        <Box
          h={['0px','210px','210px']}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
          src={props.img}
          layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={[10,400,800]}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={['25px','xl','2xl']}
            fontFamily={'body'}>
           {props.title}
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
        <Stack  mt={6} direction={'row'} spacing={200} align={'center'}>
          <Stack  direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600} color="blue">Read Now...</Text>
          </Stack>
          <Stack  direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontSize={[7,10, 10]} fontWeight={[200,400,400]}>Achim Rolle</Text>
            <Text fontSize={[7,7, 16]} color={'gray.500'}>Feb 08, 2021</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}