import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';

import { Add } from 'styled-icons/material/Add';

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
`

const TaskTitle = styled.h1`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  color: ${colour.black};
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${colour.complement};
  width: ${props => (props.barOpened ? "30rem" : "2rem")};
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

const AddIcon = styled(Add)`
  width: 2rem;
  height: 2rem;
`

const TodoList = styled.ul`

`

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const App = () => {
  const [todo, setTodo] = useState([]);
  const [todoCounter, setTodoCounter] = useState(0);
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const Todo = ({ todo }) => <TodoItem>{todo.text}</TodoItem>;

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => { document.removeEventListener("mousedown", handleClick); };
  }, []);

  const handleClick = e => {
    if (formRef.current.contains(e.target)) {
      return;
    }
    setBarOpened(false);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setTodoCounter(todoCounter + 1)
    setInput("");
    setBarOpened(false);
  };

  return (
    <AppContainer>
      <TodoListContainer>
        {(todoCounter === 0) ? (<TaskTitle>You have no tasks</TaskTitle>) : 
        ((todoCounter === 1) ? (<TaskTitle>You have {todoCounter} task</TaskTitle>) : 
        (<TaskTitle>You have {todoCounter} tasks</TaskTitle>))}
        <TodoList>
          {todo.map((t, index) => (
            <Todo
              key={index}
              index={index}
              todo={t}
            />
          ))}
        </TodoList>
        <InputContainer>
          <Form
            barOpened={barOpened}
            onClick={() => {
              setBarOpened(true);
              inputFocus.current.focus();
            }}
            onSubmit={onFormSubmit}
            ref={formRef}
          >
            <Button type="submit" barOpened={barOpened}>
              <AddIcon/>
            </Button>
            <Input
              onChange={e => setInput(e.target.value)}
              ref={inputFocus}
              value={input}
              barOpened={barOpened}
              placeholder="Add a task"
            />
          </Form>
        </InputContainer>    
      </TodoListContainer>
    </AppContainer>
  );
}

export default App;
