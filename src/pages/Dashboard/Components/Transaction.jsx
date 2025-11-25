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
];

const Transaction = () => (
  <Box bg={{ base: "white", _dark: "gray.800" }} mt={6} borderRadius="xl" p={6}>
    <Text mb={6} fontSize="sm">
      Recent Transactions
    </Text>
    <Stack spacing={4}>
      {transactions.map((transaction) => (
        <Fragment key={transaction.id}>
          <Flex gap={4} align="center">
            <Grid
              placeItems="center"
              bg={{ base: "gray.100", _dark: "gray.700" }}
              boxSize={10}
              borderRadius="full"
            >
              <Icon as={transaction.icon} boxSize={6} />
            </Grid>
            <Flex justify="space-between" align="center" w="full">
              <Stack spacing={0}>
                <Text fontWeight="semibold">{transaction.text}</Text>
                <Text fontSize="sm" color="gray.500">
                  {transaction.timestamp}
                </Text>
              </Stack>
              <Text fontWeight="semibold">{transaction.amount}</Text>
            </Flex>
          </Flex>
        </Fragment>
      ))}
    </Stack>
    <Button bg="#5F00D9" colorScheme="purple" w="full" mt={6}>
      View All
    </Button>
  </Box>
);

export default Transaction;
