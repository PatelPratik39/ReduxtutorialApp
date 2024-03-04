import React from "react";
import ReactDOM from "react-dom/client";

const employeeData = [
  { id: 100, name: "Kirk", age: 30 },
  { id: 101, name: "James", age: 31 },
  { id: 102, name: "Robert", age: 32 },
  { id: 103, name: "Dave", age: 50 },
  { id: 104, name: "Rob", age: 40 }
];
function generateTable() {
    var rowArr = [];
    for(let i=0; i <employeeData.length; i++) {
        var row = (
          <tr>
            <td>{employeeData[i].id}</td>
            <td>{employeeData[i].age}</td>
            <td>{employeeData[i].name}</td>
          </tr>
        );
        rowArr.push(row);
    }
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {rowArr}
            </tbody>
        </table>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    generateTable()
)
