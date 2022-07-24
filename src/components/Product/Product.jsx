import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    Box,
    Icon,
    Flex,
    Grid,
    GridItem,
    Link,
    Heading
} from "@chakra-ui/react"
// import { useDisclosure } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
// import {FaWpforms} from 'react-icons/fa'
import { FcAbout,FcTimeline ,FcNext,FcElectroDevices,FcGenealogy,FcGenericSortingAsc,FcNeutralTrading} from "react-icons/fc";
import style from '../Product/Product.module.css'




export default function Product() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}  margin={"auto"} >
            <MenuButton
                // variant="ghost"
                // mx={2}
                // py={[2, 2, 2]}
                // px={5}
                border={"none"}
                // backgroundColor={"white"}
                // color={"blue"}
                borderRadius={5}
                // _hover={{ bg: useColorModeValue("red.100", "red.700") }}
                aria-label="Courses"
                fontWeight="900"
                fontSize={20}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                Product {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>

            <MenuList onMouseEnter={onOpen}  borderRadius={27}width={"40%"} marginLeft={350}  onMouseLeave={onClose} >
                {/* {outerbox} */}
                {/*    */}
                <Flex  gap={5} height={700} borderRadius={25}  marginTop={"0%"} className={style.shadow}>
                    {/* {firstbox} */}
                    {/* border={"1px solid red"}  */}
                    <Box  width={"20%"} className={style.bgcolour}> 
                        <Box textAlign={"left"}  marginTop={10} marginLeft={15}  >
                            <Heading>Products</Heading>
                            <br />
                            <p className={style.topP}>Get to know the leader<br/>
                            in automated<br/>
                            scheduling and see why<br/>
                            millions connect using<br/>
                            Calendly.</p>
                        </Box>
                    </Box>
{/* {middlebox} */}
{/* border={"1px solid red"}  */}
                    <Box borderRadius={25} width={"50%"} textAlign={"left"}> 
                        <Heading className={style.gridmargin}>Features</Heading>
                        <p className={style.topP}>Flexible,intuitive features for every scheduling need</p>

                        <Grid templateColumns='repeat(2, 1fr)' gap={6}  >
                            <GridItem w='100%' h='170'    backgroundColor={"none"}>
                                <Icon as={FcAbout} fontSize={25} />
                                <h4 className={style.gridmargin}>Routing Forms</h4>
                                <p className={style.gridmarginP}>Request information from website visitors or invitees and based on their responses route them to the right person or resource.</p>
                            </GridItem>
                            <GridItem w='100%' h='170'     >
                                <Icon as={FcGenealogy} fontSize={25}/>
                                <h4 className={style.gridmargin}>Embeds</h4>
                                <p className={style.gridmarginP}>Add calendly on your website to streamline schedulings.</p>
                            </GridItem>


                            <GridItem w='100%' h='170'  >
                                <Icon as={FcGenericSortingAsc} fontSize={25}/>
                                <h4 className={style.gridmargin}>Team Scheduling</h4>
                                <p className={style.gridmarginP}>Customie exactly how and when you are booked.</p>
                            </GridItem>
                            <GridItem w='100%' h='170'   >
                                <Icon as={FcNeutralTrading} fontSize={25}/>
                                <h4 className={style.gridmargin}>Calendar Connections</h4>
                                <p className={style.gridmarginP}>Connect up to six calendars per usesr to check real_time acailability.</p>
                            </GridItem>


                            <GridItem w='100%' h='160'  >
                                <Icon as={FcElectroDevices} fontSize={25}/>
                                <h4 className={style.gridmargin}>Availability Preferences</h4>
                                <p className={style.gridmarginP}> Customize exactly how and when you are booked.</p>
                            </GridItem>
                            <GridItem w='100%' h='160'  >
                                <Icon as={FcTimeline} fontSize={25}/>
                                <h4 className={style.gridmargin}>Meeting Polls</h4>
                                <p className={style.gridmarginP}> let your invitees vote on preferred times before schedulings.</p>
                            </GridItem>


                        </Grid>
                        <div className={style.flex}>
                        <Link to="/" className={style.color1} >See all features </Link>
                        <FcNext/>
                        </div>
                        
                    </Box>
{/* {lastbox} */}
                    <Box  borderRadius={25} width={"30%"} textAlign={"left"} marginRight={8}> 
                        <Heading className={style.toph4}>Solutions</Heading>
                        <p className={style.topP}>Explore how thought leaders in your indusrty use Calendly</p>
                      
                        <Box marginTop={40} >
                            <h4 className={style.gridmarginlast}>Sales</h4>
                            <h4 className={style.gridmarginlast}>Recruiting</h4>
                            <h4 className={style.gridmarginlast}>Revenue Operation</h4>
                            <h4 className={style.gridmarginlast}>Customer Success</h4>
                            <h4 className={style.gridmarginlast}>Information Technology</h4>
                            <h4 className={style.gridmarginlast}>Marketing</h4>
                            <br />
                            <Heading className={style.toph4}>Integrations</Heading>
                            <p className={style.topP}>Seamles connections to your favorite calendars,tools and apps.</p>

                        </Box>
                    </Box>
                </Flex>
            </MenuList>
        </Menu>
    )
}