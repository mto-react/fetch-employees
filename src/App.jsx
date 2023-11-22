import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { sampleEmployee } from './components/data'
import DisplayEmployees from './components/DisplayEmployees'
import DisplayEmployee from './components/DisplayEmployee'

function App() {
  const [employee, setEmployee] = useState();
  const [employees, setEmployees] = useState();
  // console.log(Employees)
  const getEmployee = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=en')
      // Use this data to update the state
      .then((response) => {
        console.log(response.data)
        // setEmployees(response.data);
        setEmployee(response.data.results[0]);
      });
  };

  const getEmployees = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=en')
      // Use this data to update the state
      .then((response) => {
        // console.log(response.data)
        setEmployees(response.data.results);
      });
  };

  useEffect(() => {
    console.log('Hello World');
    getEmployees()
    console.log(employees)
  },[]);

  return (
    <div className='App'>
      <button type="button" onClick={getEmployee}>Get employee</button>
      {/* <h2>Liste des Employees</h2> */}
      <DisplayEmployee employee = {employee} />
      <DisplayEmployees employees = {employees} />
    </div>
  )
}

export default App
