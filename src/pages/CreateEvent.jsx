import { ArrowForwardIcon, ArrowLeftIcon, ChevronLeftIcon, EmailIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const CreateEvent = () => {
  return (
    <Box>
        <Stack direction='row' spacing={4} textAlign='center' >
            <Button leftIcon={<ArrowLeftIcon />} color={"blue"} border={"2px solid blue"}>Back</Button>
            <p1>Create type Event</p1>
            </Stack>
    </Box>
  )
}

export default CreateEvent