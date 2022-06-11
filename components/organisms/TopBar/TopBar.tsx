import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";
import { signIn } from "next-auth/react";

export const TopBar = () => {
  return (
    <Flex w="100%" flexDirection="row" p="8px 16px" justifyContent="center">
      <Flex
        w={["100%", "100%", "100%", "90ch"]}
        flexDirection="row"
        alignContent="center"
      >
        <Text
          fontSize="36px"
          fontWeight="bold"
          lineHeight="42px"
          color="#1F79BA"
          flexGrow={1}
        >
          My Todo App
        </Text>
        <HStack spacing="16px" alignContent="center">
          <MenuItem text="blog" href="/blog" />
          <MenuItem text="Product" href="/product" />
          <MenuItem text="Pricing" href="/pricing" />
        </HStack>
        <Flex marginLeft="82px">
          <Button variant="solid" colorScheme="blue" onClick={() => signIn()}>
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
