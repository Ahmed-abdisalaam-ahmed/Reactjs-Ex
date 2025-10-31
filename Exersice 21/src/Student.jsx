import React from "react";

const Student = () => {
  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      instructor: "Sarah Wilson",
      nextLesson: "Components & Props",
      color: "bg-blue-800",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      instructor: "Mike Johnson",
      nextLesson: "Async/Await",
      color: "bg-purple-800",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      instructor: "Emily Chen",
      nextLesson: "Color Theory",
      color: "bg-pink-800",
    },
  ];
  ("");
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
  const colorClasses = {
    blue: "",
    purple: "",
    pink: "",
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
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
                <div key={course.id} className="bg-gray-50 rounded-xl p-4 mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="font-semibold text-md">{course.name}</h2>
                    <p className="font-semibold text-sm text-gray-500">
                      %{course.progress}
                    </p>
                  </div>
                  <div
                    className={`h-4.5 w-full py-2 rounded-full ${course.color}`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-sm text-gray-500">
                      Next Lesson: {course.nextLesson}
                    </p>
                    <p className="font-semibold text-sm text-gray-500">
                      {course.instructor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* right section */}
          <div className="col-span-1">
            {/* upComing  */}
            <div className="mb-6 p-4 bg-white rounded-sm shadow-sm">
              <h2 className="text-lg font-semibold mb-4">
                Upcoming Assignments
              </h2>
              <div className="">
                {assignments.map((assignment) => (
                  <div className="flex items-center justify-between ">
                    <div>
                      <h3 className="font-medium text-gray-800">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">{assignment.course}</p>
                    </div>
                 <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                          assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                        {assignment.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">Due {assignment.dueDate}</p>
                    </div>
                    </div>
                ))}
              </div>
            </div>
            {/* Announcement */}
            <div className="rounded-sm space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-600 mb-4">Announcements</h2>
              <div className="space-y-4">
                {announcements.map(announcement => (
                  <div key={announcement.id} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-gray-800">{announcement.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{announcement.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{announcement.time}</p>
                  </div>
                ))}
              </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
