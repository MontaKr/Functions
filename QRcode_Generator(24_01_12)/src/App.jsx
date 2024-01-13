import React, { useState } from 'react'
import { GlobalStyle, Wrap } from './styles'

const App = () => {

  const [text, setText] = useState("");
  const [isBlank, setIsBlank] = useState(false)
  const [imgSrc , setImgSrc] = useState(null)

  const clickQR = () => {
    if(text.trim() === ""){
      setIsBlank(true);
      setImgSrc(null);
    } else {
      setImgSrc(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`);
      setText("");
      setIsBlank(false);
    }
  }

  return (
    <>
      <GlobalStyle/>
      <Wrap isBlank={isBlank} imgSrc={!!imgSrc}>
        <div className="container">
          <h1>Generate QR</h1>
          <div className="qr-area">
          {imgSrc && <img className='qr-img' src={imgSrc} alt="QR Code" />}
          </div>
          <div className="error">You must type something...</div>
          <div className="input-area">
            <input 
            className='input-text' 
            type="text" 
            placeholder='Type Something...' 
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
            <button className='generate-qr' onClick={clickQR}>Generate QR</button>
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default App