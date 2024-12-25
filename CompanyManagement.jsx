import React, { useState } from "react";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({
    name: "",
    location: "",
    linkedin: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    periodicity: "",
  });

  const handleAddCompany = () => {
    setCompanies([...companies, form]);
    setForm({
      name: "",
      location: "",
      linkedin: "",
      emails: "",
      phoneNumbers: "",
      comments: "",
      periodicity: "",
    });
  };

  return (
    <div>
      <h2>Company Management</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="LinkedIn Profile"
          value={form.linkedin}
          onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
        />
        <input
          type="text"
          placeholder="Emails"
          value={form.emails}
          onChange={(e) => setForm({ ...form, emails: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Numbers"
          value={form.phoneNumbers}
          onChange={(e) => setForm({ ...form, phoneNumbers: e.target.value })}
        />
        <textarea
          placeholder="Comments"
          value={form.comments}
          onChange={(e) => setForm({ ...form, comments: e.target.value })}
        ></textarea>
        <input
          type="text"
          placeholder="Communication Periodicity"
          value={form.periodicity}
          onChange={(e) => setForm({ ...form, periodicity: e.target.value })}
        />
        <button type="button" onClick={handleAddCompany}>
          Add Company
        </button>
      </form>

      <h3>Company List</h3>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company.name} - {company.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
