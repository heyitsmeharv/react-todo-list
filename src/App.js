import React, { useState } from "react";
import styled, { css } from 'styled-components';

import AddTodoInput from './components/AddTodoInput';

import { Bin } from 'styled-icons/icomoon/Bin';
import { Done } from 'styled-icons/material/Done';

import colour from './resources/styles/colours';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(255,136,0);
  background: linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(255,196,0,1) 68%, rgba(255,222,0,1) 100%, rgba(255,141,0,1) 100%);
`

const TodoListContainer = styled.div`
  width: 50%;
  height: 50%;
  border: solid 4px ${colour.background}
  background: ${colour.white}
  overflow-y: auto;
`

const TaskTitle = styled.h1`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  color: ${colour.black};
`

const TodoList = styled.ul`
`

const TodoItem = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 1.5rem;
  ${props => props.complete && css`
    text-decoration: line-through;
  `}
`

const Button = styled.button`
  color: white;
`;

const DoneIcon = styled(Done)`
  width: 2rem;
  height: 2rem;
  color: ${colour.black};
`

const App = () => {
  const [todo, setTodo] = useState([]);
  const [todoCounter, setTodoCounter] = useState(0);

  const addTodo = text => {
    const newTodos = [...todo, { text }];
    setTodo(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todo];
    newTodos[index].isCompleted = true;
    setTodo(newTodos);
  };

  const Todo = ({ todo, index, completeTodo }) => {
    return (
      <TodoItem
        complete={todo.isCompleted}
      >
        {todo.text}
        <Button type="submit" onClick={() => completeTodo(index)}>
          <DoneIcon />
        </Button>
      </TodoItem>
    );
  }

  return (
    <AppContainer>
      <TodoListContainer>
        {(todoCounter === 0) ? (<TaskTitle>Your Todo List Is Empty</TaskTitle>) :
          ((todoCounter === 1) ? (<TaskTitle>You Have {todoCounter} Task</TaskTitle>) :
            (<TaskTitle>You Have {todoCounter} Tasks</TaskTitle>))}
        <AddTodoInput todoCounter={todoCounter} setTodoCounter={setTodoCounter} addTodo={addTodo} />
        <TodoList>
          {todo.map((t, index) => (
            <Todo
              key={index}
              index={index}
              todo={t}
              completeTodo={completeTodo}
            />
          ))}
        </TodoList>
      </TodoListContainer>
    </AppContainer>
  );
}

export default App;
