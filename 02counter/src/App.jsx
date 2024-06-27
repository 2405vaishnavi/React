import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter => {
      if (counter > 19) {
        return counter;
      }
      return counter + 1;
    });
  };
  const removeValue = () => {
    setCounter(counter => {
      if(counter < 1 ){
        return counter;
      }
      return counter-1;
    });
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Value : {counter} </h2>
      <button 
      onClick={addValue}
      >Add Values</button>
      <br/>
      <button 
      onClick={removeValue}
      >Remove Values</button>
    </>
  )
}

export default App
