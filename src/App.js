import './App.css';
import React, { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import HeaderComponent from "./components/HeaderComponent"

import Employees from "./employees.json";
import EmployeeCards from "./components/EmployeeCards";

function sortByProperty(property) {
  return function (a, b) {
    if (a[property] > b[property])
      return 1;
    else if (a[property] < b[property])
      return -1;
    return 0;
  }
}

function App() {
  const [employees, setEmployees] = useState(Employees);
  const [filterDept, setFilterDept] = useState('');

  function sortBySalary() {
    let sorted = [...employees].sort(sortByProperty("salary"))
    setEmployees(sorted);
    console.log(sorted)
  };

  function sortByName() {
    let sorted = [...employees].sort(sortByProperty("name"))
    setEmployees(sorted);
    console.log(sorted)
  };

  function filterByDept(event) {
    if (event.target.value != null && event.target.value != "") {
      let filterEmployees = employees.filter(employee => {
        return employee.department === event.target.value;
      });
      setEmployees(filterEmployees);
      console.log(employees)
    }
  }

  function resetArray() {
    setEmployees(Employees);
  };

  return (
    <div className="App" style={{ background: "#fafafa", width: "100%"}}>
      <>
        <HeaderComponent />
        <>
        <div style={{ display: "inline-flex", margin: "20px" }}>
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            style={{ background: "#e1f5fe", marginRight: "20px" }}
            onClick={sortByName.bind(this)}>
            Sort by employee name
      </button>

          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            style={{ background: "#e1f5fe", marginRight: "20px" }}
            onClick={sortBySalary.bind(this)}>
            Sort by salary
      </button>
          <hr />

          <FormControl style={{ width: 200, height: "100%" }}>
            <InputLabel id="filter-dept-label">Filter by Department</InputLabel>
            <Select
              labelId="filter-dept-label"
              id="filter-dept-select"
              onChange={filterByDept.bind(this)}
            >
              <MenuItem value="Executive">Executive</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Operations">Operations</MenuItem>
              <MenuItem value="Information Technology">Information Technology</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
            </Select>
          </FormControl>
          <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
          <Button onClick={resetArray} >
            Reset Employees
            </Button>
        </ButtonGroup>
          <br /><br />

        </div>
        <EmployeeCards employees={employees} />
      </>
      </>
    </div>
  );
}

export default App;
