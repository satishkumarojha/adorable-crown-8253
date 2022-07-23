import {
  Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Tabs, TabList, TabPanels, Tab, TabPanel
  } from '@chakra-ui/react';
  import React from "react";
import { Link } from 'react-router-dom';
  
  export default function Teams() {
    return (
        <Box margin={"auto"} justify={"center"}>
      <Stack minH={'80vh'} width={"90%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Text
                as={'span'}
                color={'blue.400'}
                >
                CALENDLY FOR TEAMS
            </Text><br />{' '}
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'#0b3558'} as={'Heading'}>
              Smarter scheduling for teams
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'lg', lg: '2xl' }} width={"85%"} color={'gray.500'}>
            Whether your team’s performance is measured by sales revenue, recruiting pipeline, or customer retention,
            scheduling automation enables your team to hit goals faster.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                width={"170px"}
                height={"60px"}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Start for free
              </Button>
              <Button 
              rounded={'full'} 
              border={"2px solid black"} 
              bg={"white"}
              width={"170px"}
              height={"60px"}
              _hover={{
                borderColor:"blue.500",
                color:"blue.500"
              }}
              >
                Contact Sales
                </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              "https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1366&h=1108&q=50&fm=webp"
            }
          />
        </Flex>
      </Stack>
       <Stack minH={'40vh'} width={"80%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
       <Flex p={8} flex={1} align={'center'} justify={'center'}>
         <Stack spacing={6} w={'full'} maxW={'lg'}>
           <Text
               as={'span'}
               color={'blue.400'}
               >
               SPEED OF CONNECTION
           </Text><br />{' '}
           <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
             <Text color={'#0b3558'} as={'Heading'}>
             Outperform the competition with faster connections
             </Text>{' '}
           </Heading>
           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
           You can’t waste time when prospects, clients, and candidates express interest. 
           Avoid missed opportunities by automatically qualifying and routing website visitors to specific team members.
           You can also pool scheduling availability together to offer more options to connect.
           </Text>
         </Stack>
       </Flex>
       <Flex flex={0.75}>
         <Image
           alt={'Login Image'}
           objectFit={'cover'}
           height={"500px"}
           src={
             "https://images.ctfassets.net/k0lk9kiuza3o/zLDG89VPUNmWTS6SXf3W4/31f28cdea9417112d43e2270f554c289/Calendly-Availability-In-A-Click.png?w=1180&h=1107&q=50&fm=webp"
           }
         />
       </Flex>
       </Stack>
       <Stack minH={'40vh'} width={"80%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
       <Flex p={10} flex={0.75}>
         <Image
           alt={'Login Image'}
           objectFit={'cover'}
           height={"400px"}
           src={
             "https://images.ctfassets.net/k0lk9kiuza3o/6rrSFLQXzyJUdnnnrAbhpb/16ec1ec41c24edc00ad2ac3d71148a0c/Calendly-Teams-Workflows.png?w=1140&h=924&q=50&fm=webp"
           }
         />
       </Flex>
       <Flex flex={1} align={'center'} justify={'center'}>
         <Stack spacing={6} w={'full'} maxW={'lg'}>
           <Text
               as={'span'}
               color={'blue.400'}
               >
               TIME MANAGEMENT
           </Text><br />{' '}
           <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
             <Text color={'#0b3558'} as={'Heading'}>
             Automate scheduling, improve team performance
             </Text>{' '}
           </Heading>
           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
           Scheduling automation eliminates time-consuming admin tasks so your team can focus on higher priorities. 
           With actionable insights into your team’s scheduling activities and integrations with your team’s favorite tools, 
           you can identify potential process improvements and empower your team to work more efficiently. 
           </Text>
         </Stack>
       </Flex>
       </Stack>
       <Stack minH={'40vh'} width={"80%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
       <Flex p={8} flex={1} align={'center'} justify={'center'}>
         <Stack spacing={6} w={'full'} maxW={'lg'}>
           <Text
               as={'span'}
               color={'blue.400'}
               >
               CONSISTENCY IN EXECUTION
           </Text><br />{' '}
           <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
             <Text color={'#0b3558'} as={'Heading'}>
             Streamline communications across the meeting lifecycle
             </Text>{' '}
           </Heading>
           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
           From pre-call email questionnaires and confirmation texts to post-call follow-up links, 
           meeting best practices can be automatically applied across your team. These templates and workflows increase engagement and ensure consistent, 
           professional communications with your customers and candidates.
           </Text>
         </Stack>
       </Flex>
       <Flex flex={0.75}>
         <Image
           alt={'Login Image'}
           objectFit={'cover'}
           height={"500px"}
           src={
             "https://images.ctfassets.net/k0lk9kiuza3o/wyOsTDMiF1GBZ0HYBEwCX/8f1181d4039431b7873443c8166cf543/Calendly-Automation-Streamline.png?w=1164&h=932&q=50&fm=webp"
           }
         />
       </Flex>
       </Stack>
       <Tabs isFitted width={"90%"} variant="line" margin={"auto"}>
        <Box margin={"auto"} textAlign={"center"} align={"center"} marginTop={"10vh"}>
       <Text as={'span'} color={'blue.400'} fontWeight={"bold"} fontSize={"20px"} >
                FEATURES
        </Text>
        </Box>
        <Box marginBottom={"10vh"} marginTop={"5vh"}>
          <Heading margin={"auto"} align={"center"} fontSize={"5xl"} color={"#1d344b"}> 
             Favorite Team Features
          </Heading>
        </Box>
  <TabList mb='1em' width={"80%"} margin={"auto"} fontSize={"18px"} color={"#52708f"}>
    <Tab fontWeight={"extrabold"}>Team Scheduling Pages</Tab>
    <Tab fontWeight={"extrabold"}>Automated Workflow</Tab>
    <Tab fontWeight={"extrabold"}>Round Robin Events</Tab>
    <Tab fontWeight={"extrabold"}>Salesforce Inegration</Tab>
  </TabList>
  <TabPanels margin={"auto"} paddingLeft={"60px"}>
    <TabPanel>
    <Stack minH={'40vh'} width={"90%"} marginBottom={"40px"} direction={{ base: 'column', md: 'row' }}>
       <Flex p={8} flex={1} align={'center'} justify={'center'}>
         <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading>
           <Text
               as={'span'}
               color={'black'}
               >
               Team Scheduling Pages
           </Text>
           </Heading><br />{' '}
           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
           You can’t waste time when prospects, clients, and candidates express interest. 
           Avoid missed opportunities by automatically qualifying and routing website visitors to specific team members.
           </Text>
           <Link 
           to="#">
           <Text 
           textDecoration={"none"}
           color={"blue.400"}
           fontWeight={"extrabold"}
           _hover={{
            textDecoration: "underline"
           }}
           >
            Learn More {">"}
           </Text>
           </Link>
         </Stack>
       </Flex>
       <Flex margin={"40px"} flex={1.2}>
         <Image
           alt={'Login Image'}
           objectFit={'cover'}
           height={"500px"}
           src={
             "https://images.ctfassets.net/k0lk9kiuza3o/zLDG89VPUNmWTS6SXf3W4/31f28cdea9417112d43e2270f554c289/Calendly-Availability-In-A-Click.png?w=1180&h=1107&q=50&fm=webp"
           }
         />
       </Flex>
       </Stack>
    </TabPanel>
    <TabPanel>
    <Stack minH={'40vh'} width={"90%"} marginBottom={"40px"} direction={{ base: 'column', md: 'row' }}>
       <Flex p={8} flex={1} align={'center'} justify={'center'}>
         <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading>
           <Text
               as={'span'}
               color={'black'}
               >
               Automated Workflow
           </Text>
           </Heading><br />{' '}
           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
           You can’t waste time when prospects, clients, and candidates express interest. 
           Avoid missed opportunities by automatically qualifying and routing website visitors to specific team members.
           </Text>
           <Link 
           to="#">
           <Text 
           textDecoration={"none"}
           color={"blue.400"}
           fontWeight={"extrabold"}
           _hover={{
            textDecoration: "underline"
           }}
           >
            Learn More {">"}
           </Text>
           </Link>
         </Stack>
       </Flex>
       <Flex margin={"40px"} flex={1.2}>
         <Image
           alt={'Login Image'}
           objectFit={'cover'}
           height={"500px"}
           src={
             "https://images.ctfassets.net/k0lk9kiuza3o/wyOsTDMiF1GBZ0HYBEwCX/8f1181d4039431b7873443c8166cf543/Calendly-Automation-Streamline.png?w=1164&h=932&q=50&fm=webp"
           }
         />
       </Flex>
       </Stack>
    </TabPanel>
    <TabPanel>
    <Stack minH={'40vh'} width={"90%"} marginBottom={"40px"} direction={{ base: 'column', md: 'row' }}>
       <Flex p={8} flex={1} align={'center'} justify={'center'}>
         <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading>
           <Text
               as={'span'}
               color={'black'}
               >
               Round Robin Events
           </Text>
           </Heading><br />{' '}
           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
            Scheduling automation eliminates time-consuming admin tasks so your team can focus on higher priorities. 
           you can identify potential process improvements and empower your team to work more efficiently.
           </Text>
           <Link 
           to="#">
           <Text 
           textDecoration={"none"}
           color={"blue.400"}
           fontWeight={"extrabold"}
           _hover={{
            textDecoration: "underline"
           }}
           >
            Learn More {">"}
           </Text>
           </Link>
         </Stack>
       </Flex>
       <Flex margin={"40px"} flex={1.2}>
         <Image
           alt={'Login Image'}
           objectFit={'cover'}
           height={"500px"}
           src={
             "https://images.ctfassets.net/k0lk9kiuza3o/6rrSFLQXzyJUdnnnrAbhpb/16ec1ec41c24edc00ad2ac3d71148a0c/Calendly-Teams-Workflows.png?w=1140&h=924&q=50&fm=webp"
           }
         />
       </Flex>
       </Stack>
    </TabPanel>
    <TabPanel>
    <Stack minH={'40vh'} width={"90%"} marginBottom={"40px"} direction={{ base: 'column', md: 'row' }}>
       <Flex p={8} flex={1} align={'center'} justify={'center'}>
         <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading>
           <Text
               as={'span'}
               color={'black'}
               >
               Salesforce Inegration
           </Text>
           </Heading><br />{' '}
           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
           With Calendly connected to Salesforce, customer records stay up to date,
           regardless of their status. When a Calendly meeting gets booked, 
           a lead automatically gets created and if the lead already exists,
           the lead auto-updates with meeting activity.
           </Text>
           <Link 
           to="#">
           <Text 
           textDecoration={"none"}
           color={"blue.400"}
           fontWeight={"extrabold"}
           _hover={{
            textDecoration: "underline"
           }}
           >
            Learn More {">"}
           </Text>
           </Link>
         </Stack>
       </Flex>
       <Flex margin={"40px"} flex={1.2}>
         <Image
           alt={'Login Image'}
           objectFit={'cover'}
           height={"500px"}
           src={
             "https://images.ctfassets.net/k0lk9kiuza3o/1qiCwDC3BYKpbqWy6z9Z3q/b386264c8b49eff466ee48b59caac587/Calendly-Salesforce-Integration.png?w=1140&h=924&q=50&fm=webp"
           }
         />
       </Flex>
       </Stack>
    </TabPanel>
  </TabPanels>
       </Tabs>
        </Box>
    );
  }

 