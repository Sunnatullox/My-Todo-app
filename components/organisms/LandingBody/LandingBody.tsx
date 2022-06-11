import {
  Box,
  Container,
  Flex,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const LandingBody = () => {
  return (
    <Container
    height="80vh"
    >
      <SimpleGrid columns={2} spacing={10} p="64px 24px">
        <Box>
          <Box
            background="gray.300"
            width="100%"
            height="225px"
            borderRadius="16px"
          ></Box>
        </Box>
        <Flex justifyContent="center" flexDirection="column">
          <Text> Including the market standard technalogyies</Text>
          <UnorderedList>
            <ListItem>Next.js</ListItem>
            <ListItem>Chakra UI</ListItem>
            <ListItem>Database PostgreSQL</ListItem>
          </UnorderedList>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
