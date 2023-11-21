import React from 'react';
import { useState } from 'react'
import './App.css'
import { Employees } from './components/Employees'
import DisplayEmployees from './components/DisplayEmployees'

function App() {
  const [count, setCount] = useState(0)
  // console.log(Employees)
  return (
    <div className='App'>
      <h2>Liste des Employees</h2>
      <DisplayEmployees employees = {Employees} />
    </div>
  )
}

export default App
