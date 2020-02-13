import React from 'react';
import './App.css';
import { Main } from "./components/main"
import { Tests } from "./components/tests"
import { LiveTutoring } from "./components/live-tutoring"

function App() {
  return (
    <div className="App">
      <Main />
      <Tests />
      <LiveTutoring />

    </div>
  );
}

export default App;
