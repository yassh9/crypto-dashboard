import { Box, Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <Box
      bgColor={inverted ? "purple.500" : { base: "white", _dark: "gray.800" }}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      p={{ base: 4, md: 6 }}
      borderRadius="xl"
    >
      <Tag.Root
        color={inverted ? "purple.500" : "white"}
        bg={inverted ? "white" : "purple.500"}
        borderRadius="full"
        size={{ base: "sm", md: "md" }}
      >
        {tagText}
      </Tag.Root>
      <Text
        mt={{ base: 3, md: 4 }}
        fontWeight="medium"
        textStyle="h5"
        fontSize={{ base: "sm", md: "md" }}
        color={inverted ? "white" : { base: "gray.800", _dark: "gray.200" }}
        lineHeight={{ base: "1.4", md: "1.6" }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default InfoCard;