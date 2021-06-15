import React, {useEffect, useState} from 'react'
import {FaCopy, FaRedo} from 'react-icons/fa';
import generateHex from './Generate'



function App() {
  const [code, setCode] = useState(generateHex())
  const [copied, setCopied] = useState(true)

  // change copied button inner text after clicking copy
  useEffect(() => {
    const timeout = setTimeout(() =>{
      setCopied(true)
    }, 1000)
  }, [copied])
  

  return (
    <div className="container">
      <div className="top__container">
        <div 
          className="color__container"
          style={{backgroundColor:`${code}`}}
        ></div>
        <div className="color__info">
          <p className="color__code">{code}</p>
        </div>
        <div className="btns">
          <button 
            className="copy__btn btn"
            onClick={() => {
              navigator.clipboard.writeText(code)
              setCopied(false)
            }}
            
          >
            <FaCopy />
          </button>
          <span>{copied ? 'copy hex' : 'code copied'}</span>
        </div>
      </div>
      <div className="bottom__container">
        <button 
          className="generate__btn btn"
          onClick={() =>{
            const generatedCode = generateHex()
            setCode(generatedCode)
          }}
        >
          <FaRedo />  <span>Generate</span>
        </button>
      </div>
    </div>
  );
}

export default App;
