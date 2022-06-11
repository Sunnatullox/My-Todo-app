import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { type } from "os";
import React from "react";

type MenuItemProps = {
    text:string
    href:string
}

export const MenuItem: React.FC<MenuItemProps> = ({ text, href }) => (
  <Text color="gray.500" fontSize="18px">
           <Link href={href}>
            {text}
          </Link>
  </Text>
);
