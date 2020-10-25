import React from "react";

const cardStyle = {
  background: "#fff",
  border: '2px',
  borderRadius: '15px',
  height: "350px",
  margin: "1rem",
  position: "relative",
  width: "25%",
  boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  display: 'inline-block'
};

function EmployeeCards(props) {
  return (
    <>
      <div className="container">
        {props.employees.map(employee => (
          <div className="card" key={employee.id} style={cardStyle}>
            <div className="card-header"><img src={employee.avatar} style={{width:"35%"}}/></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default EmployeeCards;