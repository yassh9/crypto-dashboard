import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Box, Heading, HStack, Icon, IconButton, Portal, Stack, Text, Tooltip } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const SideNav = ({ onClose, onExpand, isCollapsed = false }) => {
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
            w={isCollapsed ? "4.5rem" : "14rem"}
            h="100vh"
            zIndex={10}
            transition="width 0.3s ease"
            overflow="hidden">
            <Box>
                {isCollapsed ? (
                    <HStack justify="center" px="3" pt="4" pb="2">
                        <Tooltip.Root openDelay={200} closeDelay={100} positioning={{ placement: "right" }}>
                            <Tooltip.Trigger asChild>
                                <IconButton
                                    onClick={onExpand}
                                    variant="ghost"
                                    size="sm"
                                    aria-label="Expand sidebar"
                                >
                                    <FaBars size={20} />
                                </IconButton>
                            </Tooltip.Trigger>
                            <Portal>
                                <Tooltip.Positioner>
                                    <Tooltip.Content>Expand</Tooltip.Content>
                                </Tooltip.Positioner>
                            </Portal>
                        </Tooltip.Root>
                    </HStack>
                ) : (
                    <HStack justify="space-between" px="4" pt="4" pb="2">
                        <Heading as="h1" fontSize="xl">Vibe Coding</Heading>
                        {onClose && (
                            <IconButton
                                onClick={onClose}
                                variant="ghost"
                                size="sm"
                                aria-label="Close sidebar"
                            >
                                <IoClose size={20} />
                            </IconButton>
                        )}
                    </HStack>
                )}
                <Box mx="3" mt={isCollapsed ? "4" : "3"}>
                    {
                        sidelinks.map(nav => (
                            isCollapsed ? (
                                <Tooltip.Root key={nav.text} openDelay={200} closeDelay={100} positioning={{ placement: "right" }}>
                                    <Tooltip.Trigger asChild>
                                        <Box
                                            py="3"
                                            px="3"
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            _hover={{
                                                borderRadius: "10px",
                                                cursor: "pointer",
                                                bg: { _light: "#F3F3F7", _dark: "gray.700" },
                                                color: { _light: "#171717", _dark: "white" },
                                                fontWeight: "medium"
                                            }}
                                            color={{ _light: "#797E82", _dark: "gray.400" }}>
                                            <Icon as={nav.icon} boxSize={5} />
                                        </Box>
                                    </Tooltip.Trigger>
                                    <Portal>
                                        <Tooltip.Positioner>
                                            <Tooltip.Content>{nav.text}</Tooltip.Content>
                                        </Tooltip.Positioner>
                                    </Portal>
                                </Tooltip.Root>
                            ) : (
                                <HStack
                                    key={nav.text}
                                    py="3"
                                    px="4"
                                    justify="flex-start"
                                    _hover={{
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        bg: { _light: "#F3F3F7", _dark: "gray.700" },
                                        color: { _light: "#171717", _dark: "white" },
                                        fontWeight: "medium"
                                    }}
                                    color={{ _light: "#797E82", _dark: "gray.400" }}>
                                    <Icon as={nav.icon} boxSize={5} />
                                    <Text>{nav.text}</Text>
                                </HStack>
                            )
                        ))
                    }
                </Box>
            </Box>
            
            {isCollapsed ? (
                <Stack mx="3" mb="6" spacing={3}>
                    <Tooltip.Root openDelay={200} closeDelay={100} positioning={{ placement: "right" }}>
                        <Tooltip.Trigger asChild>
                            <Box
                                py="3"
                                px="3"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                _hover={{
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    bg: { _light: "#F3F3F7", _dark: "gray.700" },
                                    color: { _light: "#171717", _dark: "white" },
                                    fontWeight: "medium"
                                }}
                                color={{ _light: "#797E82", _dark: "gray.400" }}>
                                <Icon as={BiSupport} boxSize={5} />
                            </Box>
                        </Tooltip.Trigger>
                        <Portal>
                            <Tooltip.Positioner>
                                <Tooltip.Content>Support</Tooltip.Content>
                            </Tooltip.Positioner>
                        </Portal>
                    </Tooltip.Root>
                    <Tooltip.Root openDelay={200} closeDelay={100} positioning={{ placement: "right" }}>
                        <Tooltip.Trigger asChild>
                            <Box
                                py="3"
                                px="3"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                onClick={toggleColorMode}
                                _hover={{
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    bg: { _light: "#F3F3F7", _dark: "gray.700" },
                                    color: { _light: "#171717", _dark: "white" },
                                    fontWeight: "medium"
                                }}
                                color={{ _light: "#797E82", _dark: "gray.400" }}
                                cursor="pointer">
                                <Icon as={colorMode === "dark" ? LuSun : LuMoon} boxSize={5} />
                            </Box>
                        </Tooltip.Trigger>
                        <Portal>
                            <Tooltip.Positioner>
                                <Tooltip.Content>Dark Mode</Tooltip.Content>
                            </Tooltip.Positioner>
                        </Portal>
                    </Tooltip.Root>
                </Stack>
            ) : (
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
            )}
        </Stack>
    )
}

export default SideNav
