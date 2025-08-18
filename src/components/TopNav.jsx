import { Box, Button, Flex, Heading, HStack, Icon, Menu, Portal } from "@chakra-ui/react"
import { RiAccountCircleLine } from "react-icons/ri";
const TopNav = () => {
    return (
    <Box>
        <HStack  h="4rem" align="center" justify="space-between" maxW="80rem" px="32" mx="auto">
            <Heading as="h2" >Dashboard</Heading>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Box variant="unstyled" size="sm" transform="scale(1)" transition="transform 0.2s ease" _hover={{ transform: "scale(1.2)" }}>
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
