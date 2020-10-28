import './App.css';
import React from 'react';
import Background from './components/Background.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="App container mt-3">
    <h2 className="text-center mb-4">Trinh Gliedt</h2>
      <NavBar/>
      <Background/>
    </div>
  );
}

export default App;
