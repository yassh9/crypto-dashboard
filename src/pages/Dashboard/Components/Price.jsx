import { Box, Button, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react"
import { FaRupeeSign } from "react-icons/fa"
import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi"
const Price = () => {
  return (
    <Box  bg="white" mt="6" borderRadius="xl" p={6}> 
    <HStack justify="space-between"   >
      
        <Stack>
          <p>Current price</p>
          <HStack>
          <Text
            textStyle="lg"
            display="flex"
            alignItems="center"
            fontWeight="bold">
            <Icon as={FaRupeeSign} style={{ marginRight: "0.2rem" }} />
            10,000
          </Text>
          <Text color="green.600">
            +2.5% 
          </Text>
          </HStack>
        </Stack>
        
      <Box>
        <Button bg="#5F00D9" borderRadius="xl" m="2">
          <PiHandDepositFill style={{ marginRight: "0.2rem" }} /> Buy</Button>
        <Button bg="#5F00D9" borderRadius="xl" mr="2">
          <PiHandWithdrawFill style={{ marginRight: "0.2rem" }} /> Sell</Button>
      </Box>

      
    </HStack>
    <Image src="Graph.png" w="100%"/>

    </Box>
  )
}

export default Price
