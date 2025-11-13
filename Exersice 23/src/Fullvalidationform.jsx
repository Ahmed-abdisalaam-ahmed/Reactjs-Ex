import React, { useState } from "react";
import "./index.css";

const Fullvalidationform = () => {
  const [formdata, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: {
      React: false,
      JavaScript: false,
      TypeScript: false,
      Nodejs: false,
      Python: false,
      Java: false,
      UIDesign: false,
      APIDevelopment: false,
    },
    agreeTerms: false,
    receiveNotifications: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    setFormData({
      username: "",
      email: "",
      checkbox: false,
      option: "",
    });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "skills" ? checked : value,
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
          Select an option:
          <select name="option" value={formdata.option} onChange={handleChange}>
            <option value="">Select a Role...</option>
            <option value="full-satck">Full stack Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="ui/ux">UI/Ux Designer</option>
            <option value="product">Product Manager</option>
          </select>
        </label>
         <fieldset>
        <legend>Skills:</legend>
        {Object.keys(formdata.skills).map((skill) => (
          <label key={skill}>
            <input
              type="checkbox"
              name={skill}
              checked={formdata.skills[skill]}
              onChange={handleChange}
            />
            {skill}
          </label>
        ))}
      </fieldset>
      <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Fullvalidationform;
