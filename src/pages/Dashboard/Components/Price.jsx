import { Box, Button, Flex, HStack, Icon, Image, Stack, Tabs, Text } from "@chakra-ui/react"
import { FaRupeeSign } from "react-icons/fa"
import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi"

const items = [
  { title: "1D", image: "Graph.png" },
  { title: "1M" },
  { title: "1Y" },
  { title: "5Y" },
]

const minTabHeight = { base: "180px", md: "240px" } // Responsive height

const Price = () => (
  <Box bg={{ base: "white", _dark: "gray.800" }} borderRadius="xl" p={{ base: 4, md: 6 }} h="full">
    <Stack spacing={6} h="full">
      {/* Price & Buttons */}
      <Flex 
        justify="space-between" 
        align={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 3, md: 0 }}
      >
        <Stack spacing={1}>
          <Text fontSize={{ base: "xs", md: "md" }} opacity={0.8}>Current price</Text>
          <HStack>
            <Text
              textStyle="lg"
              display="flex"
              alignItems="center"
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              <Icon as={FaRupeeSign} mr="0.2rem" />
              10,000
            </Text>
            <Text color="green.600" fontSize={{ base: "sm", md: "md" }}>+2.5%</Text>
          </HStack>
        </Stack>
        <HStack flexWrap="wrap" gap={2}>
          <Button 
            bg="#5F00D9" 
            colorScheme="purple" 
            borderRadius="xl" 
            size={{ base: "sm", md: "md" }}
            flex={{ base: "1", sm: "0" }}
            minW={{ base: "auto", sm: "100px" }}
          >
            <PiHandDepositFill style={{ marginRight: "0.2rem" }} /> Buy
          </Button>
          <Button 
            bg="#5F00D9" 
            colorScheme="purple" 
            borderRadius="xl"
            size={{ base: "sm", md: "md" }}
            flex={{ base: "1", sm: "0" }}
            minW={{ base: "auto", sm: "100px" }}
          >
            <PiHandWithdrawFill style={{ marginRight: "0.2rem" }} /> Sell
          </Button>
        </HStack>
      </Flex>
      {/* Tabs below price/buttons */}
      <Tabs.Root defaultValue="1D" width="full">
        <Tabs.List justifyContent="end">
          {items.map((item, index) => (
            <Tabs.Trigger key={index} value={item.title} fontSize={{ base: "xs", md: "sm" }}>
              {item.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {/* Tab panel with consistent height */}
        <Box pos="relative" minH={minTabHeight}>
          {items.map((item, index) => (
            <Tabs.Content
              key={index}
              value={item.title}
              position="absolute"
              inset="0"
              minH={minTabHeight}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="gray.50"
              _open={{
                animationName: "fade-in, scale-in",
                animationDuration: "300ms",
              }}
              _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "120ms",
              }}
            >
              {item.image ? (
                <Image src={item.image} w="100%" h={minTabHeight} objectFit="contain" />
              ) : (
                <Text color="gray.400" fontSize={{ base: "sm", md: "md" }}>No Data Available</Text>
              )}
            </Tabs.Content>
          ))}
        </Box>
      </Tabs.Root>
    </Stack>
  </Box>
);

export default Price;
