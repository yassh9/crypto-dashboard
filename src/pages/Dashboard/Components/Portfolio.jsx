import { Box, Button, HStack, Icon, Stack, Text } from "@chakra-ui/react"
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
        <Stack 
            bg={{ base: "white", _dark: "gray.800" }} 
            p={{ base: 4, md: 6 }} 
            borderRadius="xl" 
            direction={{ base: "column", md: "row" }}
            justify={{ md: "space-between" }}
            align={{ base: "stretch", md: "center" }}
            spacing={{ base: 4, md: 0 }}
        >
            <Stack spacing={1}>
                <Text
                    display="flex"
                    alignItems="center"
                    opacity={0.7}
                    fontWeight="light"
                    fontSize={{ base: "sm", md: "md" }}>
                    Total Portfolio Value
                    <FiInfo style={{ marginLeft: "0.5rem" }} />
                </Text>

                <Text
                    textStyle="lg"
                    display="flex"
                    alignItems="center"
                    fontWeight="bold"
                    fontSize={{ base: "xl", md: "2xl" }}>
                    <Icon as={FaRupeeSign} style={{ marginRight: "0.2rem" }} />
                    {TotalValue}
                </Text>
            </Stack>
            <Stack spacing={1}>
                <Text
                    opacity={0.7}
                    fontWeight="light"
                    fontSize={{ base: "sm", md: "md" }}>
                    Wallet Balances
                </Text>
                <HStack flexWrap="wrap" spacing={{ base: 2, md: 3 }}>
                    <Text
                        fontWeight="bold"
                        display="flex"
                        alignItems="center"
                        fontSize={{ base: "sm", md: "md" }}>
                        <Icon as={BsCurrencyBitcoin} />
                        {WalletBalances.Bitcoin}
                    </Text>
                    <Text
                        fontWeight="bold"
                        display="flex"
                        alignItems="center"
                        fontSize={{ base: "sm", md: "md" }}>
                        <Icon as={FaRupeeSign} style={{ marginRight: "0.2rem" }} />{WalletBalances.Rupees}
                    </Text>
                </HStack>
            </Stack>
            <Stack direction={{ base: "row", md: "column" }} spacing={2} w={{ base: "full", md: "auto" }}>
                <Button 
                    bg="#5F00D9" 
                    colorScheme="purple" 
                    borderRadius="xl" 
                    size={{ base: "sm", md: "md" }}
                    flex={{ base: 1, md: 0 }}
                    w={{ md: "auto" }}
                >
                    <PiHandDepositFill style={{ marginRight: "0.2rem" }} /> Deposit
                </Button>
                <Button 
                    bg="#5F00D9" 
                    colorScheme="purple" 
                    borderRadius="xl"
                    size={{ base: "sm", md: "md" }}
                    flex={{ base: 1, md: 0 }}
                    w={{ md: "auto" }}
                >
                    <PiHandWithdrawFill style={{ marginRight: "0.2rem" }} /> Withdraw
                </Button>
            </Stack>
        </Stack>
    )
}

export default Portfolio
