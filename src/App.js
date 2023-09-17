import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [listItems, setCurrentTime] = useState(0);
  
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.map((row) => <tr><td>{row.name}</td><td>{row.email}</td></tr>));
    });
  },[]);

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
        <p>The  current users are </p>
        <table>
          <thead><th>Name</th><th>Email</th></thead>
          {listItems}
        </table>
        
      </header>
    </div>
  );
}

export default App;
