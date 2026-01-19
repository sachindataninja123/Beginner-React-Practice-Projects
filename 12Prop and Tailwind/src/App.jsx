
import './App.css'
import Card from './components/Card.jsx'
import React from 'react'

function App() {
  

  return (
   <>
   <h1 className='bg-green-400 text-black p-4  rounded-xl mb-6'>Tailwind Test</h1>
   <Card  userName = "Sachin"/>
   <Card  userName = "Virat" Des = "He is the no-1 Cricketer in the world and he is a king" />
  
   </>
  )
}

export default App
