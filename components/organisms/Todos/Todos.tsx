import { Todo } from ".prisma/client";
import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, Heading, IconButton, Input } from "@chakra-ui/react";

type TodosProps = {
  todos: Todo[];
  onTodoBlure: (todoId: string, newTitle: string) => void;
  onTodoCheckedbox: (todoId: string, isComplated: boolean) => void;
  onTodoDelete: (todoId: string) => void;
};

export const Todos: React.FC<TodosProps> = ({
  todos,
  onTodoBlure,
  onTodoCheckedbox,
  onTodoDelete,
}) => {

  console.log(onTodoDelete)
  return (
    <>
      <Heading size="md" mb="16px" mt="24px">
        Todos{" "}
      </Heading>
      {todos.map((todo) => (
        <Flex key={todo.id} my="4px" role="group">
          <Input
            readOnly={todo.isComplated}
            color={todo.isComplated ? "gray.500" : "gray.800"}
            textDecoration={todo.isComplated ? "line-through" : "none"}
            defaultValue={todo.title}
            variant="unstyled"
            onBlur={(event: React.FormEvent<HTMLInputElement>) => {
              if (todo.title === event?.currentTarget.value) {
                return;
              }
              onTodoBlure(todo.id, event?.currentTarget.value);
            }}
          />
          <Checkbox
            isChecked={todo.isComplated}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onTodoCheckedbox(todo.id, e.target.checked)
            }
          />
          <IconButton
            icon={<DeleteIcon />}
            variant='ghost'
            colorScheme='red'
            size="sm"
            ml="8px"
            aria-label="Delete todo"
            onClick={() => onTodoDelete(todo.id)}
            opacity={0}
            visibility={todo.isComplated ? "hidden" : "visible" }
            _groupHover={{opacity:1}}
          />
        </Flex>
      ))}
    </>
  );
};
