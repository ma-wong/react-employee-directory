import React from "react";
import "./style.css";

export function EmployeeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function EmployeeListItem( {firstName, lastName, img, phoneNum, email, DOB }) {
  return (
    <div className="container">
      <li className="list-group-item">
        <div className="row">
          <div className="col-md-1 column">
            <img src={img}></img>
          </div>

          <div className="col-md-3 column">
            <p>{firstName} {lastName}</p>
          </div>

          <div className="col-md-2 column">
            <p>{phoneNum}</p>
          </div>

          <div className="col-md-3 column">
            <p>{email}</p>
          </div>

          <div className="col-md-3 column">
            <p>{DOB}</p>
          </div>

        </div>
      </li>
    </div>
  
  );
}
