import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  VStack,
//   Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} px={4} my={'5rem'} mx={"25rem"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>

          <VStack spacing={8} >
<HStack>

          <Button bg={'none'} fontWeight={"semibold"} rightIcon={<MdOutlineKeyboardArrowDown size={40}/>} mr={80}>
                <Menu>
                  <MenuButton bg={'none'}  fontWeight={"semibold"} >
                    <Heading as={'h2'} fontWeight={'normal'} >My Calendly</Heading>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                    <Box mr={4}>
                    {/* <BsBoxArrowUpRight/>  */}
                    </Box>
                    Help Center</MenuItem>
                    <MenuItem>
                    {/* <Box mr={4}><MdOutlineLiveHelp/></Box> */}
                     Chat With Us</MenuItem>
                  </MenuList>
                </Menu>
              </Button>

</HStack>
              
            <HStack
              as={"nav"}
              spacing={4}
              justifyContent={'space-between'}
              display={{ base: "none", md: "flex" }}
            >

              <Link to={'/'} >
              <Button bg={"none"} fontWeight={"semibold"}>
              Event Types
                </Button>
               
              </Link>
              <Link to={'/scheduled_events'}>
              <Button bg={"none"} fontWeight={"semibold"}>
              Scheduled Events
                </Button>
               
              </Link>
              <Link to={'/workflows'} >
              <Button bg={"none"} fontWeight={"semibold"}>
              Workflows
                </Button>
               
              </Link>
              <Link to={'/routing_forms'} >
                <Button bg={"none"} fontWeight={"semibold"}>
                Routing Forms
                </Button>
              </Link>
            </HStack>
          </VStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              bg={"#3372cc"}
              color= {'white'}
              size={"lg"}
              mr={4}
              leftIcon={<AddIcon />}
              borderRadius={50}
            >
              Create
            </Button>
           
          </Flex>
        </Flex>

      </Box>

    </>
  );
}
