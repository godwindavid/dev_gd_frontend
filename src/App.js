import { useEffect, useState } from 'react';
import './App.css';
import { io } from "socket.io-client";
import Routing from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import appContext from './appContext';

function App() {
  const [token, setToken] = useState("")

  const context = {
    token,
    setToken
  }

  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('connect', () => {
      console.log('Connected to the server');
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <appContext.Provider value={context}>
        <Router>
          <Routing />
        </Router>
      </appContext.Provider>
    </div>
  );
}

export default App;
