import axios from "axios";
import { useEffect, useState } from "react";
import { Todos } from "./Todos";

const fetchTodos = async () => {
  const response = await fetch("api/todos");
  const data = response.json();
  return data;
};
type TodosContainer = {
  refreshTodoToken: string;
};

export const TodosContainer: React.FC<TodosContainer> = ({
  refreshTodoToken,
}) => {
  const [todos, setTodos] = useState([]);
  const [comlatedTodoToken, setComleatedTodoToken] = useState("");
  const [deletecomlatedTodoToken, setDeleteComleatedTodoToken] = useState("");

  useEffect(() => {
    fetchTodos().then((todos) => setTodos(todos));
  }, [refreshTodoToken, comlatedTodoToken, deletecomlatedTodoToken]);

  const onTodoBlure = (todoId: string, newText: string) => {
    axios.put(`/api/todo/${todoId}`, { title: newText });
  };

  const onTodoCheckedbox = (todoId: string, isComplated: boolean) => {
    axios
      .put(`/api/todo/${todoId}`, { isComplated })
      .finally(() => setComleatedTodoToken(Math.random().toString()));
  };
 
  const onTodoDelete = (todoId: string) => {
    axios.delete(`/api/todo/${todoId}`)
      .finally(() => setDeleteComleatedTodoToken(Math.random().toString()));
  };

  return (
    <Todos
      todos={todos}
      onTodoBlure={onTodoBlure}
      onTodoCheckedbox={onTodoCheckedbox}
      onTodoDelete={onTodoDelete}
    />
  );
};
