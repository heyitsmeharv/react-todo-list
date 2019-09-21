import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components'

import AddTaskInput from './components/AddTaskInput';

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

function App() {
  return (
    <AppContainer>
      <AddTaskInput/>
    </AppContainer>
  );
}

export default App;
