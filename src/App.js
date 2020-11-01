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
import ResetEmployees from "./employees.json";
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
  const [viewType, setView] = useState('');

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

  const filterByDept = (event) => {
    if (employees.length != 10) {
      console.log(ResetEmployees)
      let filterEmployees = ResetEmployees.filter(employee => {
        return employee.department === event.target.value;
      });
      setEmployees(filterEmployees);
      setFilterDept(event.target.value);
    } else {
      let filterEmployees = [...employees].filter(employee => {
        return employee.department === event.target.value;
      });
      setEmployees(filterEmployees);
      setFilterDept(event.target.value);
    }
  }

  function resetArray() {
    if (employees.length != 10 || employees[0] != ResetEmployees[0]) {
      setEmployees(ResetEmployees);
    } else {
      setEmployees(employees);
    }
    console.log(employees)
  };

  function setListType(type) {
    setView("List")
  }
  function setCardType(type) {
    setView("Card")
  }

  return (
    <div className="App" style={{ background: "#fafafa", width: "100%" }}>
      <>
        <HeaderComponent />
        <>
          <div style={{ display: "inline-flex", margin: "20px" }}>
            <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
              <Button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                style={{ background: "#e1f5fe", marginRight: "20px" }} onClick={resetArray} >
                Reset Employees
            </Button>
              <Button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                style={{ background: "#e1f5fe", marginRight: "20px" }}
                onClick={sortByName.bind(this)}>
                Sort by employee name
      </Button>

              <Button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                style={{ background: "#e1f5fe", marginRight: "20px" }}
                onClick={sortBySalary.bind(this)}>
                Sort by salary
      </Button>
            </ButtonGroup>
            <hr />

            <FormControl style={{ width: 200, height: "100%" }}>
              <InputLabel id="filter-dept-label">Filter by Department</InputLabel>
              <Select
                labelId="filter-dept-label"
                id="filter-dept-select"
                value={filterDept || ""}
                onChange={filterByDept}
              >
                <MenuItem value="Executive">Executive</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Operations">Operations</MenuItem>
                <MenuItem value="Information Technology">Information Technology</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
              </Select>
            </FormControl>


            <Button
              onClick={setCardType.bind(this)} style={{ background: "#e1f5fe", width: "75px", height: "50px", marginRight: "20px" }}>
              <img src="/assets/cardicon.png" style={{ background: "#e1f5fe", width: "55%", height: "45%" }} />
            </Button>
            <Button
              onClick={setListType.bind(this)} style={{ background: "#e1f5fe", width: "75px", height: "50px" }}>
              <img src="/assets/list_icon.png" style={{ background: "#e1f5fe", width: "65%", height: "45%" }} />
            </Button>

            <br /><br />

          </div>
          <EmployeeCards employees={employees} viewType={viewType}/>
        </>
      </>
    </div>
  );
}

export default App;
