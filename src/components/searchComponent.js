import React from 'react';
import employees from "../employees.json";
import EmployeeCards from "../components/EmployeeCards";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function sortByProperty(property) {
  return function (a, b) {
    if (a[property] > b[property])
      return 1;
    else if (a[property] < b[property])
      return -1;
    return 0;
  }
}

class searchComponent extends React.Component {
  state = {
    employees: []
  };

  sortBySalary() {
    let sorted = employees.sort(sortByProperty("salary"))
    this.setState({
      [employees]: sorted,
    })
    console.log(sorted)
  };

  sortByName() {
    let sorted = employees.sort(sortByProperty("name"))
    this.setState({
      [employees]: sorted,
    })
    console.log(sorted)
  };

  filterByDept(event) {
    if (event.target.value != null && event.target.value != "") {
      let filterEmployees = employees.filter(employee => {
        return employee.department === event.target.value;
      });
      this.setState({
        [employees]: filterEmployees
      })
      console.log(employees)
    }
  }


  render() {
    return (
      <>
        <div style={{ display: "inline-flex", margin: "20px" }}>
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            style={{ background: "#e1f5fe", marginRight: "20px" }}
            onClick={this.sortByName.bind(this)}>
            Sort by employee name
      </button>

          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            style={{ background: "#e1f5fe", marginRight: "20px" }}
            onClick={this.sortBySalary.bind(this)}>
            Sort by salary
      </button>
          <hr />

          <FormControl style={{ width: 200, height: "100%" }}>
            <InputLabel id="filter-dept-label">Filter by Department</InputLabel>
            <Select
              labelId="filter-dept-label"
              id="filter-dept-select"
              onChange={this.filterByDept.bind(this)}
            >
              <MenuItem value="Executive">Executive</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Operations">Operations</MenuItem>
              <MenuItem value="Information Technology">Information Technology</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
            </Select>
          </FormControl>

          <br /><br />

        </div>
        <EmployeeCards employees={employees} />
      </>
    );
  }
}

export default searchComponent;