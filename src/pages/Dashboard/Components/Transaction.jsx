import { Box, Button, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaBtc } from 'react-icons/fa6';
import { Fragment } from 'react';

const transactions = [
  {
    id: "1",
    icon: BsCurrencyRupee,
    text: "INR Deposit",
    amount: "+ ₹81,123.10",
    timestamp: "2022-06-09 7:06 PM",
  },
  {
    id: "2",
    icon: FaBtc,
    text: "BTC Sell",
    amount: "- 12.48513391 BTC",
    timestamp: "2022-06-09 7:06 PM",
  },
  {
    id: "3",  
    icon: BsCurrencyRupee,
    text: "INR Deposit",
    amount: "+ ₹81,123.10",
    timestamp: "2022-06-09 7:06 PM",
  },
  {
    id: "4",  
    icon: BsCurrencyRupee,
    text: "INR Deposit",
    amount: "+ ₹81,123.10",
    timestamp: "2022-06-09 7:06 PM",
  },
  
];

const Transaction = () => (
  <Box 
    bg={{ base: "white", _dark: "gray.800" }} 
    borderRadius="xl" 
    p={{ base: 4, md: 6 }} 
    h="full"
    display="flex"
    flexDirection="column"
  >
    <Text mb={{ base: 3, md: 6 }} fontSize={{ base: "xs", md: "sm" }} fontWeight="medium" opacity={{ base: 0.8, md: 1 }}>
      Recent Transactions
    </Text>
    <Stack spacing={{ base: 2.5, md: 4 }} flexGrow={1}>
      {transactions.map((transaction) => (
        <Fragment key={transaction.id}>
          <Flex gap={{ base: 3, md: 4 }} align="center">
            <Grid
              placeItems="center"
              bg={{ base: "gray.100", _dark: "gray.700" }}
              boxSize={{ base: 8, md: 10 }}
              borderRadius="full"
              flexShrink={0}
            >
              <Icon as={transaction.icon} boxSize={{ base: 4, md: 6 }} />
            </Grid>
            <Flex justify="space-between" align="center" w="full" gap={{ base: 2, md: 0 }}>
              <Stack spacing={0} flex={1}>
                <Text fontWeight="semibold" fontSize={{ base: "sm", md: "md" }}>{transaction.text}</Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" display={{ base: "none", sm: "block" }}>
                  {transaction.timestamp}
                </Text>
              </Stack>
              <Text fontWeight="semibold" fontSize={{ base: "xs", md: "md" }} textAlign="right" flexShrink={0}>{transaction.amount}</Text>
            </Flex>
          </Flex>
        </Fragment>
      ))}
    </Stack>
    <Button bg="#5F00D9" colorScheme="purple" w="full" mt={{ base: 4, md: 6 }} size={{ base: "sm", md: "md" }}>
      View All
    </Button>
  </Box>
);

export default Transaction;
