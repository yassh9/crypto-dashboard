
import { Box, Flex } from "@chakra-ui/react"
import SideNav from "../../components/SideNav"
import TopNav from "../../components/TopNav"
const Dashboard = () => {
  return (
    <div>
    <Flex>
      <SideNav />
      <Box flexGrow={1}>
        <TopNav />
      </Box>

    </Flex>
    </div>
  )
}

export default Dashboard
