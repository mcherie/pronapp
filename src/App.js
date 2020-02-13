import React from 'react';
import './App.css';
import { Main } from "./components/main"
import { Tests } from "./components/tests"
import { LiveTutoring } from "./components/live-tutoring"
import { Bottom } from "./components/bottom"
import { Footer } from "./components/footer"

function App() {
  return (
    <div className="App">
      <Main />
      <Tests />
      <LiveTutoring />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
