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
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white w-full max-w-xl p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">
          Developer Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formdata.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block font-medium mb-1">Role</label>
            <select
              name="role"
              value={formdata.role}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
            >
              <option value="">Select a role</option>
              <option value="fullstack">Full Stack Developer</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="uiux">UI/UX Designer</option>
              <option value="product">Product Manager</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="block font-medium mb-1">Years of Experience</label>
            <input
              type="number"
              name="experience"
              value={formdata.experience}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Enter experience in years"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block font-medium mb-2">Skills</label>

            <div className="grid grid-cols-2 gap-2">
              {Object.keys(formdata.skills).map((skill) => (
                <label key={skill} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={skill}
                    checked={formdata.skills[skill]}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>

          {/* Agree Terms */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formdata.agreeTerms}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label>I agree to the terms and conditions</label>
          </div>

          {/* Notifications */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="receiveNotifications"
              checked={formdata.receiveNotifications}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label>Receive notifications about new opportunities</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fullvalidationform;
