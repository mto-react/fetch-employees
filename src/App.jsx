import React from 'react';
import { useState } from 'react'
import './App.css'
import { sampleEmployee } from './components/data'
import DisplayEmployees from './components/DisplayEmployees'

function App() {
  const [count, setCount] = useState(0)
  // console.log(Employees)
  return (
    <div className='App'>
      <h2>Liste des Employees</h2>
      <DisplayEmployees employees = {sampleEmployee} />
    </div>
  )
}

export default App
