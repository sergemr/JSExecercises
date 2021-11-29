import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Anagrams   from "./components/Anagrams/Anagrams";
function App() {
  return (
    <div  data-testid="App" className="App">
      <Anagrams/>
    </div>
  );
}

export default App;
