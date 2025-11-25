import { Box, Container, Flex } from "@chakra-ui/react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import { useState } from "react"
import SideDrawer from "./SideDrawer"

const DashLayout = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true)
  
  return (
    <Flex>
      {/* Desktop Sidebar - Always visible, just collapsed/expanded */}
      <Box 
        display={{ base: "none", lg: "flex" }} 
        w={desktopSidebarOpen ? "14rem" : "4.5rem"}
        flexShrink={0}
        transition="width 0.3s ease"
      >
        <SideNav 
          onClose={() => setDesktopSidebarOpen(false)} 
          onExpand={() => setDesktopSidebarOpen(true)}
          isCollapsed={!desktopSidebarOpen}
        />
      </Box>

      {/* Mobile Drawer */}
      <SideDrawer open={open} setOpen={setOpen} />
      
      <Box 
        flexGrow={1} 
        minH="100vh" 
        bg={{ base: "gray.100", _dark: "gray.900" }}
        transition="all 0.3s ease"
        ml={{ base: 0, lg: desktopSidebarOpen ? 0 : 0 }}
      >
        <TopNav 
          title={title} 
          setOpen={setOpen} 
          desktopSidebarOpen={desktopSidebarOpen}
          setDesktopSidebarOpen={setDesktopSidebarOpen}
        />
        <Container mt={{ base: 4, md: 6 }} maxW="60rem" mx="auto" px={{ base: 4, md: 4 }}>
          {children}
        </Container>

      </Box>

    </Flex>
  )
}

export default DashLayout
