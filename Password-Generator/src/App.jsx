import { useState, useCallback, useEffect } from 'react'
import { use } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(5)
  const [numsAllowed, setNumsAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let myString = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numsAllowed) myString += "1234567890";
    if (charsAllowed) myString += "!@#$%^&*_+?/\|";
    for (let i = 1; i < length; i++) {
      let index = Math.floor(Math.random() * myString.length + 1);
      pass += myString[index];
    }
    setPassword(pass);
  }, [length, numsAllowed, charsAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numsAllowed, charsAllowed])

  return (
    <>
      <h1>password Generator</h1>
      <input type="text"
        placeholder='your Password:'
        value={password} readonly></input>
      <div>
        <input type="range"
          max={50}
          min={1}
          className='cursor-pointer'
          value={length}
          onChange={(event) => { setlength(event.target.value) }}></input>
        <label>Length:{length}</label>
        <input type="checkbox"
          defaultChecked={numsAllowed}
          value={numsAllowed}
          onChange={(event) => {
            setlength(event.target.value)
          }}></input>
        <label>Numbers</label>
        <input type="checkbox"
          defaultChecked={numsAllowed}
          value={numsAllowed}
          onChange={(event) => {
            setlength(event.target.value)
          }}></input>
        <label>Characters</label>
      </div>
    </>
  )
}

export default App
