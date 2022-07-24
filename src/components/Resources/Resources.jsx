import {
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    Box,
    Icon,
    Flex,
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { FcAbout ,FcElectroDevices,FcGenealogy,FcGenericSortingAsc,FcNeutralTrading} from "react-icons/fc";
import style from '../Resources/Resources.module.css'




export default function Resources() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                // variant="ghost"
                // mx={2}
                // py={[2, 2, 2]}
                // px={5}
                border={"none"}
                // color={"blue"}
                borderRadius={5}
                // _hover={{ bg: useColorModeValue("red.100", "red.700") }}
                aria-label="Courses"
                fontWeight="900"
                fontSize={20}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                Resoures {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>

            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}borderRadius={25} margin={0} width={1000}>
                {/* {outerbox} */}
                {/* border={"1px solid black"}  */}
                <Flex width={1000} gap={0} height={600} borderRadius={25} className={style.shadow} >
                    {/* {firstbox} */}
                    {/* border={"1px solid red"}  */}
                    <Box  width={"20%"} className={style.bgcolour}> 
                        <Box textAlign={"left"}  marginLeft={15}  >
                            <Heading marginTop={10}>Resources</Heading>
                            <br />
                            <p className={style.topP}>More in-depth information about every carner of the Calendly sechDuling ecosystem.</p>
                        </Box>
                    </Box>
{/* {middlebox} */}
{/* border={"1px solid red"}  */}
                    <Box borderRadius={25} width={"50%"} textAlign={"left"} > 
                        <Grid templateColumns='repeat(2, 1fr)' gap={5} width={770} marginLeft={5} marginTop={5}>
                            <GridItem w='100%' h='180'  marginTop={50}>
                                <Icon as={FcAbout} fontSize={35} />
                                <h1 className={style.gridmargin}>About</h1>
                                <p className={style.gridmarginP}>Learn about who we are</p>
                            </GridItem>
                            <GridItem w='100%' h='170'  marginTop={50}>
                                <Icon as={FcGenealogy} fontSize={25}/>
                                <h4 className={style.gridmargin}>Customer Stories</h4>
                                <p className={style.gridmarginP}>Hear from Our Valued customers</p>
                            </GridItem>


                            <GridItem w='100%' h='170' >
                                <Icon as={FcGenericSortingAsc} fontSize={25}/>
                                <h4 className={style.gridmargin}>Resource Center</h4>
                                <p className={style.gridmarginP}>Explore all of ous resorces</p>
                            </GridItem>
                            <GridItem w='100%' h='170' >
                                <Icon as={FcNeutralTrading} fontSize={25}/>
                                <h4 className={style.gridmargin}>Help Center</h4>
                                <p className={style.gridmarginP}>Explain how to use Calendly</p>
                            </GridItem>


                            <GridItem w='100%' h='160' >
                                <Icon as={FcElectroDevices} fontSize={25}/>
                                <h4 className={style.gridmargin}>Blog</h4>
                                <p className={style.gridmarginP}>Thoughts news and best practices.</p>
                            </GridItem>
                            <GridItem>
                                <h1 className={style.bottomh1}>Newsroom</h1>
                                <h1 className={style.bottomh1}>Partners</h1>
                                <h1 className={style.bottomh1}>Developers</h1>
                                <h1 className={style.bottomh1}>Careers</h1>
                            </GridItem>
                        </Grid>
                    </Box>
                  

                </Flex>
            </MenuList>
        </Menu>
    )
}