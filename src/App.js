import React from 'react';
import AddTask from './components/AddTask';

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(255,136,0);
  background: linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(255,196,0,1) 68%, rgba(255,222,0,1) 100%, rgba(255,141,0,1) 100%);
`

const PageTitle = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 5rem;
  padding: 5rem 0 5rem 0;
  font-size: 5rem;
`

function App() {
  return (
    <Container>
      <PageTitle>React Todo List</PageTitle>
      <AddTask/>
    </Container>
  );
}

export default App;
