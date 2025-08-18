import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
const SideNav = () => {
    const sidelinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/"
        },
        {
            icon: GrTransaction,
            text: "Transactions",
            link: "/transactions"
        }
    ]
    return (
        <Stack justify={"space-between"} boxShadow="sm" maxW="16rem" h="100vh">
            <Box>
                <Heading as="h1" textAlign="center" pt="2rem"> Vibe Coding </Heading>

                <Box mx="3" mt="3">
                    {
                        sidelinks.map(nav => (
                            <HStack
                                key={nav.text}
                                py="3"
                                px="4"
                                _hover={{
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    bg: "#F3F3F7",
                                    color: "#171717",
                                    fontWeight: "medium"
                                }}
                                color="#797E82">
                                <Icon as={nav.icon} />
                                <Text >{nav.text}</Text>
                            </HStack>
                        ))
                    }
                </Box>
            </Box>
            <Box mx="3" mb="6">
                <HStack

                    py="3"
                    px="4"
                    _hover={{
                        borderRadius: "10px",
                        cursor: "pointer",
                        bg: "#F3F3F7",
                        color: "#171717",
                        fontWeight: "medium"
                    }}
                    color="#797E82">
                    <Icon as={BiSupport} />
                    <Text >Support</Text>
                </HStack>
            </Box>
        </Stack>
    )
}

export default SideNav
