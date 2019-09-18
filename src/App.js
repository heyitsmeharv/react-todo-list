import './resources/styles/reset.css'
import './resources/styles/styles.css'
import React from 'react';

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(255,136,0);
  background: linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(255,196,0,1) 68%, rgba(255,222,0,1) 100%, rgba(255,141,0,1) 100%);
`

const PageTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 5rem
`

function App() {
  return (
    <Container>
      <PageTitle>React Todo List</PageTitle>
    </Container>
  );
}

export default App;
