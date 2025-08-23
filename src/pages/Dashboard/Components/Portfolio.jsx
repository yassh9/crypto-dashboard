import { Box, Button , HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { PiHandDepositFill } from "react-icons/pi";
import { PiHandWithdrawFill } from "react-icons/pi";
import { BsCurrencyBitcoin } from "react-icons/bs";
const Portfolio = () => {
    const [TotalValue, setTotalValue] = useState(14050.08);
    const [WalletBalances, setWalletBalances] = useState({
        Bitcoin: (0.002 * TotalValue).toFixed(2),
        Rupees: ((TotalValue * 25) / 100).toFixed(2),
    });
    return (
        <HStack bg="white" justify="space-between" p={4} borderRadius="xl" >
            <Stack>
                <Text display="flex" alignItems="center" opacity={0.7} fontWeight="light">Total Portfolio Value <FiInfo style={{ marginLeft: "0.5rem" }} /></Text>
                <Text textStyle="lg" display="flex" alignItems="center" fontWeight="bold">
                    <Icon as={FaRupeeSign} style={{ marginRight: "0.2rem" }} />
                    {TotalValue}
                </Text>
            </Stack>
            <Stack>
                <Text opacity={0.7} fontWeight="light">Wallet Balances</Text>
                <HStack>
                    <Text fontWeight="bold" mr={2} display="flex" alignItems="center"> <Icon as={BsCurrencyBitcoin} />{WalletBalances.Bitcoin} </Text>
                    <Text fontWeight="bold" ml={2} display="flex" alignItems="center"> <Icon as={FaRupeeSign} style={{ marginRight: "0.2rem" }} />{WalletBalances.Rupees} </Text>
                </HStack>
            </Stack>
            <Box>
                <Button bg="#5F00D9" borderRadius="xl" m="2"> <PiHandDepositFill style={{ marginRight: "0.2rem" }} /> Deposit</Button>
                <Button bg="#5F00D9" borderRadius="xl" mr="2"> <PiHandWithdrawFill style={{ marginRight: "0.2rem" }} /> Withdraw</Button>
            </Box>
        </HStack>
    )
}

export default Portfolio
