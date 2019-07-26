import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const [userText, setUserText] = useState('');

  const updateUserText = event => {
    setUserText(event.target.value);
    console.log(`current userText`, userText);
  }

  return (
    <div>
      <h2>Type Race</h2>
      <input value={userText} onChange={updateUserText} />
    </div>
  )
}
export default App;