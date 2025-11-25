import { Box, Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <Box
      bgColor={inverted ? "purple.500" : { base: "white", _dark: "gray.800" }}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      p={6}
      borderRadius="xl"
      mt={6}
    >
      <Tag.Root
        color={inverted ? "purple.500" : "white"}
        bg={inverted ? "white" : "purple.500"}
        borderRadius="full"
      >
        {tagText}
      </Tag.Root>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : { base: "gray.800", _dark: "gray.200" }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default InfoCard;