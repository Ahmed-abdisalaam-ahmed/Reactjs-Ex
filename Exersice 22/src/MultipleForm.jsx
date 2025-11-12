import React, { useState } from "react";
import "./index.css";

const MultipleForm = () => {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    option: "",
    checkbox: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    setFormData({
      username: "",
      email: "",
      password: "",
      checkbox: false,
      option: "",
    });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username:
          <input
            type="name"
            name="username"
            placeholder="Enter your username"
            value={formdata.username}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formdata.password}
            onChange={handleChange}
            required
          />
        </label>

        <label className="checkbox-label">
          <input type="checkbox" name="checkbox" onChange={handleChange} />{" "}
          Accept Terms
        </label>

        <label>
          Select an option:
          <select name="option" value={formdata.option} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultipleForm;
