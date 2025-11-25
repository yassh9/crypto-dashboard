import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Box, Heading, HStack, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const SideNav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
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
        <Stack
            position="fixed"
            top={0}
            left={0}
            bg={{ base: "white", _dark: "gray.800" }}
            justify={"space-between"}
            boxShadow={{ base: "none", lg: "lg" }}
            w="14rem"
            h="100vh"
            zIndex={10}>
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
                                    bg: { _light: "#F3F3F7", _dark: "gray.700" },
                                    color: { _light: "#171717", _dark: "white" },
                                    fontWeight: "medium"
                                }}
                                color={{ _light: "#797E82", _dark: "gray.400" }}>
                                <Icon as={nav.icon} />
                                <Text >{nav.text}</Text>
                            </HStack>
                        ))
                    }
                </Box>
            </Box>
            <Box mx="3" mb="6">
                <HStack
                    justify="space-between"
                    py="3"
                    px="4"
                    _hover={{
                        borderRadius: "10px",
                        cursor: "pointer",
                        bg: { _light: "#F3F3F7", _dark: "gray.700" },
                        color: { _light: "#171717", _dark: "white" },
                        fontWeight: "medium"
                    }}
                    color={{ _light: "#797E82", _dark: "gray.400" }}>
                    <HStack>
                        <Icon as={BiSupport} />
                        <Text>Support</Text>
                    </HStack>
                    <IconButton
                        onClick={toggleColorMode}
                        variant="ghost"
                        size="sm"
                        aria-label="Toggle color mode"
                    >
                        {colorMode === "dark" ? <LuSun /> : <LuMoon />}
                    </IconButton>
                </HStack>
            </Box>
        </Stack>
    )
}

export default SideNav
