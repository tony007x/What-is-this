import About from './assets/about'
import './App.css'
import { useState } from 'react';

const data: string[] = ["a", "b", "c", "d"];

function App() {
  const [state, setState] = useState<string>(" ")

  return (

    <div className='App'>
      <h1>Hello World!</h1>
      <About data={data} func={setState} />
      {
        data.map((item, idx) => {
          if (item === "a")
            return <h1 key={idx}>AAA</h1>;
          else
            return <h4 key={idx}>{item}</h4>;
        })
      }
      <div className='state'>
        {state}
      </div>

      <button className='button' onClick={() => {
        setState("Boon is Gay!")
      }}>OKAY</button>
      <button className='button' onClick={() => {
        setState("")
      }}>Reset</button>

    </div>
  )
}

export default App
