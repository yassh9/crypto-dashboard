// import { Box, Button, Flex, HStack, Icon, Image, Stack, Tabs, Text } from "@chakra-ui/react"
// import { FaRupeeSign } from "react-icons/fa"
// import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi"

// const items = [
//   {
//     title: "1D",
//     image: "Graph.png",
//   },
//   {
//     title: "1M",
//   },
//   {
//     title: "1Y",
    
//   },
//   {
//     title: "5Y",
    
//   },
// ]

// const Price = () => {
//   return (
//     <Box bg="white" mt="6" borderRadius="xl" p={6}>
//       <Stack spacing={6}>
//         {/* Price and Buttons section */}
//         <Flex justify="space-between" align="center">
//           <Stack>
//             <Text>Current price</Text>
//             <HStack>
//               <Text
//                 textStyle="lg"
//                 display="flex"
//                 alignItems="center"
//                 fontWeight="bold"
//               >
//                 <Icon as={FaRupeeSign} mr="0.2rem" />
//                 10,000
//               </Text>
//               <Text color="green.600">
//                 +2.5%
//               </Text>
//             </HStack>
//           </Stack>

//           <Box>
//             <Button bg="#5F00D9" borderRadius="xl" m="2">
//               <PiHandDepositFill style={{ marginRight: "0.2rem" }} /> Buy
//             </Button>
//             <Button bg="#5F00D9" borderRadius="xl" mr="2">
//               <PiHandWithdrawFill style={{ marginRight: "0.2rem" }} /> Sell
//             </Button>
//           </Box>
//         </Flex>

//         {/* Tabs go below price/buttons */}
//         <Tabs.Root defaultValue="1D" width="full">
//           <Tabs.List justifyContent="end">
//             {items.map((item, index) => (
//               <Tabs.Trigger key={index} value={item.title}>
//                 {item.title}
//               </Tabs.Trigger>
//             ))}
//           </Tabs.List>
          
//           {/* Full width image below tabs */}
//           <Box pos="relative" minH="200px" >
//             {items.map((item, index) => (
//               <Tabs.Content
//                 key={index}
//                 value={item.title}
//                 position="absolute"
//                 inset="0"
//                 _open={{
//                   animationName: "fade-in, scale-in",
//                   animationDuration: "300ms",
//                 }}
//                 _closed={{
//                   animationName: "fade-out, scale-out ",
//                   animationDuration: "120ms",
//                 }}
//               >
//                 {<Image src={item.image} w="100%" />}
//               </Tabs.Content>
//             ))}
//           </Box>
//         </Tabs.Root>
//       </Stack>
//     </Box>
//   )
// }

// export default Price

import { Box, Button, Flex, HStack, Icon, Image, Stack, Tabs, Text } from "@chakra-ui/react"
import { FaRupeeSign } from "react-icons/fa"
import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi"

const items = [
  { title: "1D", image: "Graph.png" },
  { title: "1M" },
  { title: "1Y" },
  { title: "5Y" },
]

const minTabHeight = "240px" // Shared value for all tabs

const Price = () => (
  <Box bg={{ base: "white", _dark: "gray.800" }} mt="6" borderRadius="xl" p={6}>
    <Stack spacing={6}>
      {/* Price & Buttons */}
      <Flex justify="space-between" align="center">
        <Stack>
          <Text>Current price</Text>
          <HStack>
            <Text
              textStyle="lg"
              display="flex"
              alignItems="center"
              fontWeight="bold"
            >
              <Icon as={FaRupeeSign} mr="0.2rem" />
              10,000
            </Text>
            <Text color="green.600">+2.5%</Text>
          </HStack>
        </Stack>
        <Box>
          <Button bg="#5F00D9" colorScheme="purple" borderRadius="xl" m="2">
            <PiHandDepositFill style={{ marginRight: "0.2rem" }} /> Buy
          </Button>
          <Button bg="#5F00D9" colorScheme="purple" borderRadius="xl" mr="2">
            <PiHandWithdrawFill style={{ marginRight: "0.2rem" }} /> Sell
          </Button>
        </Box>
      </Flex>
      {/* Tabs below price/buttons */}
      <Tabs.Root defaultValue="1D" width="full">
        <Tabs.List justifyContent="end">
          {items.map((item, index) => (
            <Tabs.Trigger key={index} value={item.title}>
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
                <Text color="gray.400">No Data Available</Text>
              )}
            </Tabs.Content>
          ))}
        </Box>
      </Tabs.Root>
    </Stack>
  </Box>
);

export default Price;
