import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Tabs from './components/Tabs';
import Routes from "./Routes";


function App() {
  return (
    <Router>
      <div className="app">
        <main className="browser">
          <Tabs />

          <p className="viewport">
            <Routes />
          </p>
        </main>
      </div>
    </Router>
  );
}


export default App;
