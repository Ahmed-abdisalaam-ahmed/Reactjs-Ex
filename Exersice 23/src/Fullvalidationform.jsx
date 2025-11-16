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
  const [errors, setErrors] = useState({});

  const validationError = () => {
    const error = {};

    if (!formdata.fullName.trim()) {
      error.fullName = "Full name is required";
    }
    if (!formdata.email.trim()) {
      error.email = "Email is required";
    }
    if (!formdata.role.trim()) {
      error.role = "Please select a role";
    }
    if (!formdata.experience.trim()) {
      error.experience = "Experience is required";
    }
    if (!Object.values(formdata.skills).some(Boolean)){
      error.skills = "Please select at least one skill";
    }else{
      error.skills = ""
    }
    if (!formdata.agreeTerms) {
      error.agreeTerms = "You must agree to the terms";
    }
    return error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validationError();

    if (Object.keys(validate).length === 0) {
      alert("Register is seccussfully");
    } else {
      setErrors(validate);
    }
          setFormData({
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
    console.log(formdata);
  };
  const EmailConfig = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const fullnameConfig = /^[A-Za-z ]{2,30}$/;
  const experienceConfig = /^(?:[0-9]|[1-3][0-9]|40)$/;


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      // Checkbox inside skills object
      if (name in prevData.skills) {
        return {
          ...prevData,
          skills: {
            ...prevData.skills,
            [name]: checked,
          },
        };
      }
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
    if (name === "email" && !EmailConfig.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is invalid",
      }));
    } else if (name === "fullName" && !fullnameConfig.test(value)) {
      setErrors((prev) => ({
        ...prev,
        fullName: "Please enter a valid name (2–30 characters, letters only)",
      }));
    } else if (name === "experience" && !experienceConfig.test(value)) {
      setErrors((prev) => ({
        ...prev,
        experience: "Experience is invalid",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
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
            <br />
            {errors.fullName && (
              <p className="text-red-600">{errors.fullName}</p>
            )}
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
            {errors.email && <p className="text-red-600">{errors.email}</p>}
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
            {errors.role && <p className="text-red-600">{errors.role}</p>}
          </div>

          {/* Experience */}
          <div>
            <label className="block font-medium mb-1">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formdata.experience}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Enter experience in years"
            />
            {errors.experience && (
              <p className="text-red-600 capitalize">{errors.experience}</p>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="block font-medium mb-2">Skills</label>

            <div className="grid grid-cols-2 gap-2">
              {Object.keys(formdata.skills).map((skill) => (
                <label key={skill} className="flex 0-center gap-2">
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
            {errors.skills && <p className="text-red-600">{errors.skills}</p>}
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
          {errors.agreeTerms === false ? (
            <p className="hidden"></p>
          ) : (
            <p className="text-red-600">{errors.agreeTerms}</p>
          )}

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
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition cursor-pointer"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fullvalidationform;
