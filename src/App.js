import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './Form';
import supabase from './supabaseClient';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


function App() {
  return (
    <div className="app-container">
      <h1>Rental Application Form</h1>
      <Form />
    </div>
  );
}

export default App;
