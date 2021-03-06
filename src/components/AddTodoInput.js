import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';

import { Add } from 'styled-icons/material/Add';

import colour from '../resources/styles/colours';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
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
  color: ${colour.white};
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: ${colour.white};
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: ${colour.white};
`;

const AddIcon = styled(Add)`
  width: 2rem;
  height: 2rem;
`

const ErrorMessage = styled.h1`
  font-size: 2rem;
  margin-top: 1rem;
  color: red;
`

const AddTodoInput = ({ todoCounter, setTodoCounter, addTodo }) => {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(true);
  const [valid, setValid] = useState(true);
  const formRef = useRef();
  const inputFocus = useRef();

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
    if (input !== '') {
      e.preventDefault();
      setValid(true);
      addTodo(input);
      setTodoCounter(todoCounter + 1);
      setInput("");
      setBarOpened(false);
    } else {
      e.preventDefault();
      setValid(false);
    }
  };

  return (      
    <Wrapper>
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
      {!valid &&
        <ErrorMessage>You can't submit an empty task</ErrorMessage>
      }
    </Wrapper>    
  );
}

export default AddTodoInput;
