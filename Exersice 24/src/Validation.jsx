import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

const Validation = () => {
  const { register, handleSubmit, formState: { errors}, reset} = useForm();
  const subjects = [
   "Mathematics",
   "Science",
   "English"
  ];

  const onSubmit = (data) => {
    alert(`my student registration ${JSON.stringify(data)}`)
    console.log(data);
  };
  return (
    <div className="bg-blue-950 min-h-screen flex justify-center items-center px-4">
      <div className="bg-blue-800 w-full max-w-3xl shadow-xl p-10 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Student Registration</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Username */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is Required", pattern : {value: /^[A-Za-z ]{2,30}$/ , message: "Please enter a valid name (2-30 characters, letters only)"}})}
              className="px-4 py-2 rounded-lg bg-blue-700 outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.username && (
              <p className="text-rose-400 text-sm">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email Address",
                },
              })}
              className="px-4 py-2 rounded-lg bg-blue-700 outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-rose-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Grade Level */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Grade Level</label>
            <select
              {...register("gradeLevel",
                {required: "Choose your grade please"}
              )}
              className="px-4 py-2 rounded-lg bg-blue-700 outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Grade</option>
              <option value="grade9">Grade 9</option>
              <option value="grade10">Grade 10</option>
              <option value="grade11">Grade 11</option>
              <option value="grade12">Grade 12</option>
            </select>
               {errors.gradeLevel && (
              <p className="text-rose-400 text-sm">{errors.gradeLevel.message}</p>
            )}
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Subjects Interest</label>

            <div className="flex flex-col gap-2 bg-blue-700 p-4 rounded-lg">
              {subjects.map((subject) => (
                <label key={subject} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    value={subject}
                    {...register("subjects", {
                      required: "Please select at least one subject",
                    })}
                    className="w-5 h-5"
                  />
                  <span>{subject}</span>
                </label>
              ))}
            </div>

            {errors.subjects && (
              <p className="text-rose-400 text-sm">{errors.subjects.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-row space-x-1 ">
                      <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg font-semibold text-lg"
          >
            Submit
          </button>
          <button onClick={()=> reset()} className="w-full py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg font-semibold text-lg">Reset</button>
          </div>


        </form>
      </div>
    </div>
  );
};

export default Validation;
