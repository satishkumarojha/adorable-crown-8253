import React from 'react'
import {
    Container,
    Stack,
    VStack,
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
    GridItem,
    Grid,
  } from '@chakra-ui/react';
import SolutionCard from './SolutionCard';
import {SolutionCardsData} from '../../data/data';
export const Solution = () => {
  return (
    <Flex bg={'#F7FAFF'} direction={'column'} gap={'6'} py={{sm:"30px",md:"60px"}}>
        <Box>
            <Heading  color={'blue.500'}>
                <Text textAlign={'center'} fontSize={'xl'} textTransform={'uppercase'} fontWeight={'medium'}>
                    Solutions
                </Text>
            </Heading>
        </Box>
        <Box>
           <Heading>
            <Text textAlign={'center'} color={'blue.900'} fontSize={'4.8xl'}>
            The right Calendly for the work you do
            </Text>
            </Heading> 
        </Box>
        <Box>
        <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap={4} px={"8%"}>
        
        {SolutionCardsData.map((e)=>{
          return (
        <GridItem colSpan={{base:3,md:1}} key={e.heading}>
            <SolutionCard logo={e.logo} heading={e.heading} text={e.text}/>
         </GridItem>
          )
        })}
      </Grid>
        </Box>
    </Flex>
  )
}
