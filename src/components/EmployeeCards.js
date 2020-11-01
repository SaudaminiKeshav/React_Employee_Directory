import React from "react";

const cardStyle = {
  background: "#fff",
  border: '2px',
  borderRadius: '15px',
  height: "350px",
  margin: "1rem",
  position: "relative",
  width: "20%",
  boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  display: 'inline-block',
  animation: "mymove 5s"
};

const textStyle = {
  marginLeft: "12%",
  textAlign: 'left',
  fontSize: "115%"
}

function EmployeeCards(props) {
  console.log(props.viewType)
  let content;

  if (props.viewType == "Card") {
    content =
      <>
        <div className="container1">
          {props.employees.map(employee => (
            <div className="card1" key={employee.id} style={cardStyle}>
              <div className="card-header1">
                <br />
                <img src={employee.avatar} style={{ width: "35%" }} alt="employee image" /><br />
                <h5><b>{employee.name}</b></h5><br />
                <p style={textStyle}><b>Title:</b> {employee.title}</p>
                <p style={textStyle}><b>Salary:</b> {employee.salary}</p>
                <p style={textStyle}><b>Department:</b> {employee.department}</p>
              </div>
            </div>
          ))}
        </div>
      </>

  } else if (props.viewType == "List") {
    content =
      <>
        <div className="container">
        <table className="table table-bordered">
        <thead>
                  <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Department</th>
                  </tr>
                </thead>
          {props.employees.map(employee => (
                <tbody>
                  <tr>
                    <th scope="row">{employee.id}</th>
                    <td>{employee.name}</td>
                    <td>{employee.title}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.department}</td>
                  </tr>
                </tbody>
          ))}
          </table>
        </div>
      </>

  } else {
    content =
      <>
        <div className="container1">
          {props.employees.map(employee => (
            <div className="card1" key={employee.id} style={cardStyle}>
              <div className="card-header1">
                <br />
                <img src={employee.avatar} style={{ width: "35%" }} alt="employee image" /><br />
                <h5><b>{employee.name}</b></h5><br />
                <p style={textStyle}><b>Title:</b> {employee.title}</p>
                <p style={textStyle}><b>Salary:</b> {employee.salary}</p>
                <p style={textStyle}><b>Department:</b> {employee.department}</p>
              </div>
            </div>
          ))}
        </div>
      </>
  }

  return (<>{content}</>)
}

export default EmployeeCards;