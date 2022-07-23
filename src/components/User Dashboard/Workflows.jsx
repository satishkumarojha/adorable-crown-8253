import { Box, Heading, Text,Flex, Image, VStack, Button, Grid } from '@chakra-ui/react'
import React from 'react'
import WorkflowCard from './WorkflowCard'

const Workflows = () => {
  return (
    <Box mx={'30rem'}>
        <Box border={'1px solid'} p={8} my={8} rounded={10} borderColor={'blue.500'}>
        On August 2, 2022 your trial period expires and you’ll be downgraded to a Basic free subscription. <Text color={'blue.500'}>Upgrade your subscription</Text> to keep workflows and other features from your trial period.
        </Box>

        <Flex justifyContent={'space-between'} gap={20} my={4}>
          <VStack >
            <Heading mr={20}>Save time with workflows</Heading>
            <Text>
            Automate all the work you do around events, such as text messages when events are booked, email reminders before events, and more. You can start with a commonly used workflow or create your own.
            </Text>
          </VStack>
          <Image src='https://assets.calendly.com/packs/frontend/media/workflows_octobot-055f878d6e0c1e2e1f3d.svg'/>
        </Flex>

<hr />

<Box>
  <Flex justifyContent={'space-between'} my={4}>
    <Text my={4}>Start with one of the common workflows below or create your own.</Text>
    <Button my={4} color={"blue.500"} rounded={"full"} borderColor={'blue.500'} variant={"outline"}>Create your Own Workflow</Button>
  </Flex>
  <Grid  templateColumns='repeat(3, 1fr)' gap={6}>
  <WorkflowCard logo={'https://assets.calendly.com/packs/frontend/media/icon-reminder-email-01d90ee436d6262a4333.svg'} head={'Email reminder to invitee'} desc={'24 hours before event starts - Send email to invitee'}/>
  <WorkflowCard logo={'https://assets.calendly.com/packs/frontend/media/icon-reminder-email-01d90ee436d6262a4333.svg'} head={'Email reminder to host'} desc={'Never miss an event - get automated email reminders'}/>
  <WorkflowCard logo={'https://assets.calendly.com/packs/frontend/media/icon-thank-you-email-8dcb7866f89f6456e23d.svg'} head={'Send Thank You Email'} desc={'Build relationships with a quick thanks'}/>
  <WorkflowCard logo={'	https://assets.calendly.com/packs/frontend/media/icon-reminder-text-1a4c73630b7c99f2e868.svg'} head={'Text Reminder to host'} desc={'Never miss an event - get automated text reminders'}/>
  <WorkflowCard logo={'	https://assets.calendly.com/packs/frontend/media/icon-confirmation-text-4f8d899a89288fc00bd0.svg'} head={'Text Booking confirmation to host '} desc={'Keep hosts up-to-date with scheduled events'}/>
  <WorkflowCard logo={'	https://assets.calendly.com/packs/frontend/media/icon-survey-email-72c13882da56ae29b3af.svg'} head={'Email your own feedback survey'} desc={'Email a survey link from a third party to get feedback from invitees after your event'}/>

  </Grid>
</Box>

    </Box>
  )
}

export default Workflows