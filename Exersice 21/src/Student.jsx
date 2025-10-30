import React from "react";

const Student = () => {
  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      instructor: "Sarah Wilson",
      nextLesson: "Components & Props",
      color: "blue",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      instructor: "Mike Johnson",
      nextLesson: "Async/Await",
      color: "purple",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      instructor: "Emily Chen",
      nextLesson: "Color Theory",
      color: "pink",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Build a Todo App",
      course: "React Fundamentals",
      dueDate: "2024-03-20",
      status: "pending",
    },
    {
      id: 2,
      title: "API Integration",
      course: "JavaScript Advanced",
      dueDate: "2024-03-18",
      status: "completed",
    },
    {
      id: 3,
      title: "Design System",
      course: "UI/UX Design",
      dueDate: "2024-03-25",
      status: "in-progress",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  const stats = [
    { label: "Average Grade", value: "88%", icon: "📊" },
    { label: "Courses", value: "3", icon: "📚" },
    { label: "Study Hours", value: "45h", icon: "⏰" },
    { label: "Assignments", value: "12", icon: "✍️" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 shadow-sm rounded-sm flex flex-row justify-between items-center flex-wrap">
          <div className="">
            <h1 className="text-xl font-semibold text-gray-800 capitalize">
              Wellcome back, Student
            </h1>
            <p className="text-gray-500">
              Here's what happening with your courses today.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="">🔔</span>
            <button className="bg-linear-to-br from-blue-500 to-rose-400 rounded-full py-1 px-3 text-white cursor-pointer shadow-sm">
              S
            </button>
          </div>
        </div>
        {/* Stats Grid */}

        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 mt-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white shadow-sm rounded-xl p-6 ">
              <div className="flex items-center">
                <div className="text-2xl mr-4">{stat.icon}</div>
                <div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* left section */}
          <div className="md:col-span-2 space-y-2 bg-white p-6 rounded-sm shadow-sm">
            {/* Courses */}
            <h2 className="text-lg font-semibold mb-4">Courses Progress</h2>
            <div>
              {courses.map((course) => (
                <div key={course.id} classsName="bg-gray-100 rounded-xl p-4">
                  <div>
                    <h2>{course.name}</h2>
                    <p>%{course.progress}</p>
                  </div>
                  <div></div>
                  <div>
                    <p>Next Lesson: {course.nextLesson}</p>
                    <p>Instructor: {course.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* right section */}
          <div className="col-span-1  bg-white p-6 rounded-sm shadow-sm "></div>
        </div>
      </div>
    </div>
  );
};

export default Student;
