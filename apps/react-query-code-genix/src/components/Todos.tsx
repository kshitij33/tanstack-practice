import React from 'react';
import { Form, SubmitHandler, useForm } from 'react-hook-form';
import { useTodoIds, useTodos } from '../services/queries';
import { useCreateTodo } from '../services/mutations';
import { Todo } from '../types/todo';

const Todos = () => {
  const todosIdsQuery = useTodoIds();
  const todosQueries = useTodos(todosIdsQuery.data);
  const createTodoMutation = useCreateTodo();

  const { register, handleSubmit } = useForm<Todo>();

  const handleCreateTodoMutation: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };

  if (todosIdsQuery.isPending) {
    return <p>Loading....</p>;
  }

  if (todosIdsQuery.isError) {
    return <p>Error....</p>;
  }
  return (
    <div>
      <form onClick={(e) => {
        // e.preventDefault();
        handleSubmit(handleCreateTodoMutation)
      }}>
        <input placeholder='title' {...register("title")} /> <br /><br />
        <input placeholder='description' {...register("description")} /><br /><br />
        <input type="submit" />
      </form>

      <div> Fetch Status: {todosIdsQuery.fetchStatus}</div>
      {/* {todosIdsQuery.data.map((id) => (
        // <div key={todo.id}>
        //     <h4>{todo.title}</h4>
        //     <p>{todo.description}</p>
        // </div>
        <p key={id}>{id}</p>
      ))} */}

      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <br />
            <div>ID: {data?.id}</div>
            <div>
              <b>Title: </b>
              {data?.title} <br />
              <b>Description:</b>
              {data?.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
