import React, { useState } from 'react'
import { GlobalStyle, Wrap } from './styles'

const App = () => {

  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  const vowelCount = () => {
    if (text === "") {
      setOutput("Please enter some text");
    } else {
      // optional chaning
      const count = text.match(/[aeiou]/gi)?.length || 0;
      setOutput(`The number of vowels is ${count}`);
    }
  };

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <div className="container">
          <div className="header">
            <h1>Vowel Counter</h1>
          </div>
          <div className="textarea">
            <textarea 
            name="vowelinput" 
            id="textarea" 
            cols="30" 
            rows="10" 
            placeholder='Enter your text' 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
          </div>
          <div className="count">
            <button id="count" onClick={vowelCount}>Calculate Vowels</button>
          </div>
          <div className="output">{output}</div>
        </div>
      </Wrap>
    </>
  )
}

export default App