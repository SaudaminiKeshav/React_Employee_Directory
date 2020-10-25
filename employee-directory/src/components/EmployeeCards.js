import React from "react";

const cardStyle = {
  background: "#fff",
  border: '2px',
  borderRadius: '15px',
  height: "350px",
  margin: "1rem",
  position: "relative",
  width: "25%",
  boxShadow:" 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  display : 'inline-block'
};

function EmployeeCards() {
  return (
    <>
    <div className="card" style={cardStyle}>
    <div class="card-header">Header</div>
    </div>
    </>
  )
}

export default EmployeeCards;