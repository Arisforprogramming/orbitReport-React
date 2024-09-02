import React from "react";
import styling from "./styling.css";
import satData from "./satData"; //import info from satData

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th> Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Table Body - Iterate through sat prop using map */}
        {sat.map((data, id) => (
          <tr key={id}>
            {/* Table Data */}
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational? "Active" : "Inactive"}</td>
            {/*using function true if active false if inactive*/}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
