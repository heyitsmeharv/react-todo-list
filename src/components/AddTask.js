import React from 'react';
import styled from 'styled-components';
import { AddBox } from 'styled-icons/material/AddBox';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  width: 25%;
  height: 25%;
  padding: 2rem;
  background: white;
  opacity: 0.3;
  margin: auto;
`

const AddTaskButton = styled(AddBox)`
  width: 6rem;
  height: 6rem;
  color: black;
  z-index: 1;
`

const AddTask = () => {
  return (
    <Container>
      <AddTaskButton/>
    </Container>
  );
}

export default AddTask;