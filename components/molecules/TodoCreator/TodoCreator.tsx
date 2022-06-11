import React, { useState } from "react";
import { Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";


type TodoCreatorProps = {
  onTodoCreated : () => void
}

export const TodoCreator: React.FC<TodoCreatorProps> = ({onTodoCreated}) => {
  const [title, setTitle] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const onCreate = () => {
    setisLoading(true)
    axios.post("/api/todo", {
      title
    }).then(() => {
      onTodoCreated()
    })
    .finally(() => {
      setTitle("")
      setisLoading(false)
    })
  };

  return (
    <Flex flexDirection="column" py="16px">
      <Heading size="md" mb="4px">
        Create Todo
      </Heading>
      <Flex>
        <Input
          placeholder="Samething todo .... "
          value={title}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <IconButton
          ml="4px"
          variant="solid"
          colorScheme="blue"
          onClick={onCreate}
          isLoading={isLoading}
          icon={<AddIcon />}
          aria-label="Create Todo"
        />
      </Flex>
    </Flex>
  );
};
