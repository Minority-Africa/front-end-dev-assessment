import React from 'react';
import logo from './minority.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{maxHeight:150}} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://minorityafrica.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I Love Minorities
        </a>
      </header>
    </div>
  );
}

export default App;
