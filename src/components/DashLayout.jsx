import { Box, Container, Flex } from "@chakra-ui/react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import { useState } from "react"
import SideDrawer from "./SideDrawer"

const DashLayout = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <Flex>
      <Box display={{ base: "none", lg: "flex" }} w="14rem" flexShrink={0}>
        <SideNav />
      </Box>

      <SideDrawer open={open} setOpen={setOpen} />
      <Box flexGrow={1} minH="100vh" bg={{ base: "gray.100", _dark: "gray.900" }}>
        <TopNav title={title} setOpen={setOpen} />
        <Container mt="6" maxW="60rem" mx="auto" px={4}>
          {children}
        </Container>

      </Box>

    </Flex>
  )
}

export default DashLayout
