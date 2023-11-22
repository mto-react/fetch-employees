import React from 'react';
import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { sampleEmployee } from './components/data'
import DisplayEmployees from './components/DisplayEmployees'
import DisplayEmployee from './components/DisplayEmployee'

function App() {
  const [employee, setEmployee] = useState();
  // const [employees, setEmployees] = useState(sampleEmployee);
  // console.log(Employees)
  const getEmployee = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=en')
      // Use this data to update the state
      .then((response) => {
        console.log(response.data)
        setEmployee(response.data.results[0]);
      });
  };

  return (
    <div className='App'>
      <button type="button" onClick={getEmployee}>Get employee</button>
      {/* <h2>Liste des Employees</h2> */}
      <DisplayEmployee employee = {employee} />
      {/* <DisplayEmployees employees = {employees} /> */}
    </div>
  )
}

export default App
