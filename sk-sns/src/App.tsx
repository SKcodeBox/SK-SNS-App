import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/sidebar';
import Chat from "./components/chat/chat";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Chat />
    </div>
  );
}

export default App;
    