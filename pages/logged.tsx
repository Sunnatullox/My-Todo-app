import { getSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { Button, Center, Container, Flex, Text } from "@chakra-ui/react";
import { TodosContainer } from "../components/organisms/Todos/TodosContainer";
import { UserSession } from "./api/auth/[...nextauth]";
import { NextRequest, NextResponse } from "next/server";
import { GetServerSideProps } from "next";
import { TodoCreator } from "../components/molecules/TodoCreator/TodoCreator";

function LoggedPage({ session }: { session: UserSession }): JSX.Element {
  
  const [refreshTodoToken, setRefreshTodoToken] = useState<string>("")

  return (
    <Container py="64px">
      <Center>
        <Flex flexDirection="column">
          <Text mb="24px">Hello {session?.user?.name}</Text>
          <Button onClick={() => signOut()}>Log Out</Button>
          <TodoCreator onTodoCreated={() => setRefreshTodoToken(Math.random().toString())}/>
          <TodosContainer refreshTodoToken={refreshTodoToken}/>
        </Flex>
      </Center>
    </Container>
  );
}

export default LoggedPage;

export const  getServerSideProps : GetServerSideProps = async({req}) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
