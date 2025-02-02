import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const [Length, setLength] = useState(8)
  const [hasNumber, sethasNumber] = useState(false)
  const [hasCharacters, sethasCharacters] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = new String();
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZAabcdefghijklmnopqrstuvwxyz';
    if (hasCharacters) str += '~`!@#$%^&*()_+{}[]|"?/><,.';
    if (hasNumber) str += '1234567890';
    for (let i = 0; i <= Length; i++) {
      let index = Math.floor(Math.random()*str.length+1)
      console.log('i',i)
      pass += str.charAt(index)
    }
    setPassword(pass)
    console.log(length)
    console.log(hasCharacters)
    console.log(hasNumber)
  }, [Length, hasCharacters, hasNumber, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[Length,hasNumber,hasCharacters,passwordGenerator])

  return (
    <>
      <div className="password-generator">
        <div className="input-group">
          <input
            type="text"
            id="output-holder"
            className="output-holder"
            // disabled
            value={password}
            ref={passwordRef}
          />
          <button className="copy-btn" id="copy-btn" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="parameters-holder" id="parameter-holder">
          <input type="range" name="slider" id="slider" max={100} min={8} value={Length} onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="">Length ({Length})</label>
          <input type="checkbox" name="Numbers" id="numbers" onChange={() => { sethasNumber((prev) => !prev) }} />
          <label htmlFor="numbers">Numbers</label>
          <input type="checkbox" name="Characters" id="characters" onChange={() => { sethasCharacters((prev) => !prev) }} />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
