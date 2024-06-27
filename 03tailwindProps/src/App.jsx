// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const[count,setCount] = useState(0);
  let myObj = {
    username:"Vaishnavi",
    age:22
  }

  let newArr=[1,2,3]

  return (
    <>
      {/* <Card channel="React" someObj = {newArr} /> */}
      <Card  username="Vaishnavi"/>
    </>
  )
}

export default App
