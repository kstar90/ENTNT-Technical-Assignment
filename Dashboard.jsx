import React from "react";

const Dashboard = () => {
  const companies = [
    { name: "Company A", lastCommunications: ["5th Sep", "15th Sep"], nextCommunication: "25th Sep" },
    { name: "Company B", lastCommunications: ["10th Sep"], nextCommunication: "30th Sep" },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.lastCommunications.join(", ")}</td>
              <td>{company.nextCommunication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
