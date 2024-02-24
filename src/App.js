import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MyRouter } from './router/MyRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
