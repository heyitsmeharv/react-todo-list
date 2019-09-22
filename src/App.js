import React, { useState, useEffect } from "react";
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
  border: solid 4px ${colour.border}
  background: ${colour.white}
  overflow-y: auto;
`

const TaskTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: ${colour.black};
  padding: 0 0 1rem 0;
`

const TodoList = styled.ul`
`

const TodoItem = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 1.5rem;
  margin: 1rem 0 1rem 0;
  border-bottom: 2px solid;
  ${props => props.complete && css`
    text-decoration: line-through;
    background: ${colour.complement};
  `}
`

const TodoText = styled.h1`
  display: flex;
  flex: 1;
  margin-left: 1rem;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${colour.black};
  :hover {
    cursor: pointer;
  }
`;

const DoneIcon = styled(Done)`
  width: 2rem;
  height: 2rem;
  color: ${colour.black};
  margin-left: auto;
  margin: 0 1rem 0 1rem;
`

const BinIcon = styled(Bin)`
  width: 2rem;
  height: 2rem;
  color: ${colour.black};
  margin-left: auto;
  margin: 0 1rem 0 1rem;
`;

const App = () => {
  const [todo, setTodo] = useState([]);
  const [todoCounter, setTodoCounter] = useState(0);

  useEffect(() => {
    setTodoCounter(todo.filter(t => !todo.isCompleted).length)
  }, [todo]);

  const addTodo = text => {
    const newTodos = [...todo, { text }];
    setTodo(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todo];
    newTodos[index].isCompleted = true;
    setTodo(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
      <TodoItem
        complete={todo.isCompleted}
      >
        <TodoText>
          {todo.text}
        </TodoText>
        <Button type="submit" onClick={() => completeTodo(index)}>
          Done
          <DoneIcon />
        </Button>
        <Button type="submit" onClick={() => removeTodo(index)}>
          Delete
          <BinIcon />
        </Button>
      </TodoItem>
    );
  }

  return (
    <AppContainer>
      {(todoCounter === 0) ? (<TaskTitle>Your Todo List Is Empty</TaskTitle>) :
        ((todoCounter === 1) ? (<TaskTitle>You Have {todoCounter} Task</TaskTitle>) :
          (<TaskTitle>You Have {todoCounter} Tasks</TaskTitle>))}
      <TodoListContainer>
        <AddTodoInput todoCounter={todoCounter} setTodoCounter={setTodoCounter} addTodo={addTodo} />
        <TodoList>
          {todo.map((t, index) => (
            <Todo
              key={index}
              index={index}
              todo={t}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </TodoList>
      </TodoListContainer>
    </AppContainer>
  );
}

export default App;
