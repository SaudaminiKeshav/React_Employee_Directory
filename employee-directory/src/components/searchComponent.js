import React, { useEffect } from 'react';
import employees from "../employees.json";
import EmployeeCards from "../components/EmployeeCards";

function sortByProperty(property){  
  return function(a,b){  
     if(a[property] > b[property])  
        return 1;  
     else if(a[property] < b[property])  
        return -1;  
     return 0;  
  }  
}

class searchComponent extends React.Component {
  state = {
    employees: []
  };

   sortBySalary(){
    let sorted = employees.sort(sortByProperty("salary"))
    this.setState({
      [employees]:sorted,
    })
    console.log(sorted)
};

 sortByName(){
  let sorted = employees.sort(sortByProperty("name"))
  this.setState({
    [employees]:sorted,
  })
  console.log(sorted)
};

  render() {
    return (
      <>
        <div style={{ display: "inline-flex", margin: "20px" }}>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style={{ background: "#e1f5fe", marginRight: "20px" }} onClick={this.sortByName.bind(this)}>
            Sort by employee name
      </button>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style={{ background: "#e1f5fe", marginRight: "20px" }} onClick={this.sortBySalary.bind(this)}>
            Sort by salary
      </button>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              FILTER BY DEPARTMENT
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{ background: "#e1f5fe" }}>
              <button className="dropdown-item" type="button" style={{ fontSize: "120%" }}><b>Executive</b></button><hr />
              <button className="dropdown-item" type="button" style={{ fontSize: "120%" }}><b>Finance</b></button><hr />
              <button className="dropdown-item" type="button" style={{ fontSize: "120%" }}><b>Operations</b></button><hr />
              <button className="dropdown-item" type="button" style={{ fontSize: "120%" }}><b>Information Technology</b></button><hr />
              <button className="dropdown-item" type="button" style={{ fontSize: "120%" }}><b>Sales</b></button>
            </div>
          </div>
          <br /><br />
        </div>
        <EmployeeCards employees={employees} />
      </>
    );
  }
}

export default searchComponent;