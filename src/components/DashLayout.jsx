import { Box, Container, Flex } from "@chakra-ui/react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import { useState } from "react"
import SideDrawer from "./SideDrawer"

const DashLayout = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <Flex>
      <Box display={{ base: "none", lg: "flex" }}>
        <SideNav />
      </Box>

      <SideDrawer open={open} setOpen={setOpen} />
      <Box flexGrow={1} minH="100vh">
        <TopNav title={title} setOpen={setOpen} />
        <Container bg="red.100" mt="6" maxW="60rem" mx="auto" px={0}>
          {children}
        </Container>

      </Box>

    </Flex>
  )
}

export default DashLayout
