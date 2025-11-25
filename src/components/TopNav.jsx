import { Box, Button, Flex, Heading, HStack, Icon, Menu, Portal } from "@chakra-ui/react"
import { RiAccountCircleLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";

const TopNav = ({title, setOpen, desktopSidebarOpen, setDesktopSidebarOpen}) => {
    const handleToggleSidebar = () => {
        // For mobile, use the drawer
        if (window.innerWidth < 1024) {
            setOpen(true)
        } else {
            // For desktop, toggle the fixed sidebar
            setDesktopSidebarOpen(!desktopSidebarOpen)
        }
    }

    return (
    <Box 
        position="sticky" 
        top={0} 
        bg={{ base: "white", _dark: "gray.800" }} 
        zIndex={5}
        boxShadow="sm"
    >
        
        <HStack h="4rem" maxW="60rem" mx="auto" align="center" justify="space-between" px={{ base: 2, md: 4 }}>
            <HStack spacing={{ base: 2, md: 3 }}>
                <Icon 
                    as={FaBars} 
                    onClick={handleToggleSidebar} 
                    cursor="pointer"
                    _hover={{ color: "purple.500" }}
                    transition="color 0.2s"
                    boxSize={{ base: 5, md: 6 }}
                />
            </HStack>
            <Heading as="h2" fontSize={{ base: "md", sm: "lg", md: "xl" }}>{title}</Heading>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Box variant="unstyled" size="sm" transform="scale(1)" transition="transform 0.2s ease" _hover={{ transform: "scale(1.2)" }} cursor="pointer">
                        <Icon as={RiAccountCircleLine} boxSize={8} />
                    </Box>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Item value="new-txt">Log Out</Menu.Item>
                            <Menu.Item value="new-file">Support</Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </HStack>
    </Box>

    )
}

export default TopNav
