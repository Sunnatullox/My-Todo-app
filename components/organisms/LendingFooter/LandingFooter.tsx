import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export const LandingFooter = () => {
  return (
    <Box
      as="footer"
      backgroundColor="blue.300"
      py="40px"
      position="absolute"
      bottom="0"
      width="100vw"
      display="flex"
      justifyContent="center"
    >
      <Flex  w={["100%", "100%", "100%", "90ch"]}>
        <SimpleGrid columns={2} spacing={8}>
          <Box>My Todo App</Box>
          <Flex flexDirection="column">
            <Text mb="14px">Follow us on </Text>
            <HStack spacing={4}>
              <Text>Instagram</Text>
              <Text>Telegram</Text>
              <Text>Facebook</Text>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
