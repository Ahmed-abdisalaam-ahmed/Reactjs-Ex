import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

const Validation = () => {
  const {register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div>
          <label>Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is Required" })}
          />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username.message}</p>
          )}
        </div>
        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "inValid Email Address",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        {/* Grade Level */}
        <div>
          <label>Grade Level</label>
          <select {...register("gender")}>
            <option value="">Select Grade</option>
            <option value="grade9">Grade 9</option>
            <option value="grade10">Grade 10</option>
            <option value="grade11">Grade 11</option>
            <option value="grade12">Grade 12</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Validation;
