import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [long, setlong] = useState(8);
  
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState()
  const passwordGen = useCallback( () => {
    let pass = ""
    let str = "ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) (
      str += "1234567890"

    )
    if (character) { str += "!@#$%^&*()" }
    for (let i = 1; i <= long; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      
   
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [number, character, long])

  useEffect(() => {
    passwordGen()
  }, [long, number, character, passwordGen])

  const passwordRef = useRef(null)
  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])
  return (
    <>
      

     
    
      <div className='bg-[#1e293b] p-4 m-4'>
        <h1 className='text-white text-[35px] p-4 m-4'>Password generator</h1>
        <input type="text" value={password} placeholder='Password' readOnly className='p-2 m-2 rounded-lg' />
        <button className=' text-white bg-blue-400 p-2 m-2 rounded-lg ml-[-20px]'onClick={copyPass}>copy</button><br />
        <div className="flex justify-center ml-28">
          <input type="range" min={6} max={100} value={long} onChange={(e) => setlong(e.target.value)} className='p-4 m-4' /> <label className='p-4 m-4 text-2xl text-white'>length {long}</label>
          <input type="checkbox" defaultChecked={character} onChange={() => setCharacter((prev) => !prev)} className='p-4 m-4 ' /><label htmlFor="" className='p-4 m-4 text-2xl text-white'>character</label>
          <input type="checkbox" defaultChecked={number} onChange={() => setNumber((prev) => !prev)} className='p-4 m-4 ' /><label htmlFor="" className='p-4 m-4 text-2xl text-white'>nerumb</label>
        </div>
      </div>
    </>
  )
}

export default App
