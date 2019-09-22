import React, { useState } from "react";
import styled from 'styled-components';

import AddTodoInput from './components/AddTodoInput';

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
  padding: 1rem;
  font-size: 1.5rem;
`

const App = () => {
  const [todo, setTodo] = useState([]);
  const [todoCounter, setTodoCounter] = useState(0);

  const Todo = ({ todo }) => <TodoItem>{todo.text}</TodoItem>;

  const addTodo = text => {
    const newTodos = [...todo, { text }];
    setTodo(newTodos);
  };

  return (
    <AppContainer>
      <TodoListContainer>
        {(todoCounter === 0) ? (<TaskTitle>You have no tasks</TaskTitle>) : 
        ((todoCounter === 1) ? (<TaskTitle>You have {todoCounter} task</TaskTitle>) : 
        (<TaskTitle>You have {todoCounter} tasks</TaskTitle>))}
        <AddTodoInput todoCounter={todoCounter} setTodoCounter={setTodoCounter} addTodo={addTodo} />
        <TodoList>
          {todo.map((t, index) => (
            <Todo
              key={index}
              index={index}
              todo={t}
            />
          ))}
        </TodoList>
      </TodoListContainer>
    </AppContainer>
  );
}

export default App;
