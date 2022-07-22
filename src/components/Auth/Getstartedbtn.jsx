import React from 'react'
import { SiLinkedin } from 'react-icons/si';
import { Button, Center, Text } from '@chakra-ui/react';

export default function Getstartedbtn() {
  return (
    <Center p={8}>
      <Button
        w={'full'}
        maxW={'md'}
        colorScheme={'messenger'}
        >
        <Center>
          <Text>Get started</Text>
        </Center>
      </Button>
    </Center>
  );
}