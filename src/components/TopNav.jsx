import { Box, Button, Flex, Heading, HStack, Icon, Menu, Portal } from "@chakra-ui/react"
import { RiAccountCircleLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
const TopNav = ({title , setOpen}) => {
    return (
    <Box 
        position="sticky" 
        top={0} 
        bg={{ base: "white", _dark: "gray.800" }} 
        zIndex={5}
        boxShadow="sm"
    >
        
        <HStack  h="4rem"  maxW="60rem" mx="auto" align="center" justify="space-between" px={4}>
            <Icon as={FaBars}  display={{base:"flex" ,lg:"none"}} onClick={()=>{setOpen(true)}}/>
            <Heading as="h2" >{title}</Heading>
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
