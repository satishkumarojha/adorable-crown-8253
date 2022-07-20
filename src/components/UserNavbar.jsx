import { React } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,

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
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaUserAlt } from "react-icons/fa";
import { ImCreditCard } from "react-icons/im";
import { AiTwotoneCalendar, AiOutlineAppstore } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { BsFillLockFill, BsLink45Deg,BsBoxArrowUpRight } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineKeyboardArrowDown,MdOutlineLiveHelp } from "react-icons/md";
import {Link} from 'react-router-dom'




export default function UserNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} px={4} mx={['0rem','10rem','25rem']}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
                <Link to={'/'}>
              <Image
                size={""}
                borderRadius="full"
                boxSize="50px"
                src={
                    "https://assets.calendly.com/packs/frontend/media/logo-square-cd364a3c33976d32792a.png"
                }
                />
                </Link>
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              marginLeft={"10rem"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
                <Link to={'/'}>
              <Button bg={'none'} fontWeight={"semibold"}>Home</Button>
                </Link>
              <Link to={'/availabilty'}>
              <Button bg={'none'} fontWeight={"semibold"}>Availabilty</Button>
              </Link>
              <Button bg={'none'} fontWeight={"semibold"}>Integration</Button>
              <Button bg={'none'} fontWeight={"semibold"} rightIcon={<MdOutlineKeyboardArrowDown/>}>
                <Menu>
                  <MenuButton bg={'none'}  fontWeight={"semibold"}>
                    Help
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                    <Box mr={4}>
                    <BsBoxArrowUpRight/> 
                    </Box>
                    Help Center</MenuItem>
                    <MenuItem>
                    <Box mr={4}><MdOutlineLiveHelp/></Box>
                     Chat With Us</MenuItem>
                  </MenuList>
                </Menu>
              </Button>
            </HStack>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Flex marginLeft={8}>

                <Avatar size={"sm"} src={""} />
                <Box marginLeft={2} > <Button bg={'none'} rightIcon={<MdOutlineKeyboardArrowDown/>}>Account</Button>  </Box>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  {" "}
                  <Box marginRight={4}>
                    {" "}
                    <FaUserAlt size={14} />{" "}
                  </Box>{" "}
                  Account Settings
                </MenuItem>
                <MenuItem>
                  <Box marginRight={4}>
                    <ImCreditCard size={15} />
                  </Box>
                  Billing
                </MenuItem>
                <MenuItem>
                  <Box marginRight={3}>
                    <AiTwotoneCalendar size={18} />
                  </Box>
                  Calender Connections
                </MenuItem>
                <MenuItem>
                  <Box marginRight={3}>
                    <MdPeople size={18} />
                  </Box>
                  Admin Management
                </MenuItem>
                <MenuItem>
                  <Box marginRight={3}>
                    <BsFillLockFill size={18} />
                  </Box>
                  Organisation Settings
                </MenuItem>
                <MenuItem>
                  <Box marginRight={3}>
                    <BsLink45Deg size={18} />
                  </Box>
                  Share Your Link
                </MenuItem>

                <MenuItem>
                  <Box marginRight={3}>
                    <AiOutlineAppstore size={18} />
                  </Box>
                  Apps
                </MenuItem>

                <MenuDivider />
                <MenuItem>
                  <Box marginRight={3}>
                    <IoIosLogOut size={18} />
                  </Box>
                  LogOut
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
      <hr />
    </>
  );
}
