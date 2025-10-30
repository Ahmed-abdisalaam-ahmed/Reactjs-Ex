import React from 'react'

const Student = () => {
      const courses = [
    { id: 1, name: 'React Fundamentals', progress: 75, instructor: 'Sarah Wilson', nextLesson: 'Components & Props', color: 'blue' },
    { id: 2, name: 'JavaScript Advanced', progress: 45, instructor: 'Mike Johnson', nextLesson: 'Async/Await', color: 'purple' },
    { id: 3, name: 'UI/UX Design', progress: 90, instructor: 'Emily Chen', nextLesson: 'Color Theory', color: 'pink' },
  ];

  const assignments = [
    { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
    { id: 2, title: 'API Integration', course: 'JavaScript Advanced', dueDate: '2024-03-18', status: 'completed' },
    { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'in-progress' },
  ];

  const announcements = [
    { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
    { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
  ];

  const stats = [
    { label: 'Average Grade', value: '88%', icon: '📊' },
    { label: 'Courses', value: '3', icon: '📚' },
    { label: 'Study Hours', value: '45h', icon: '⏰' },
    { label: 'Assignments', value: '12', icon: '✍️' },
  ];
  return (
     <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
         {/* Header */}
        <div className="bg-white p-6 shadow-sm rounded-sm flex flex-row justify-between items-center flex-wrap">
        <div className="">
            <h1 className="text-xl font-semibold text-gray-800 capitalize">Wellcome back, Student</h1>
            <p className='text-gray-500'>Here's what happening with your courses today.</p>
        </div>
        <div className="flex gap-4">
            <span className=''>🔔</span>
            <button className='bg-gradient-to-br from-pink-500 to-rose-400 rounded-full py-1 px-3 text-white cursor-pointer shadow-sm'>S</button>
        </div>
        </div>
    {/* Stats Grid */}
    <div className="">
        <div className="">
            {
                stats.map((stat)=>(
                    <div className="">
                        <span>{stat.icon}</span>
                        <span>{stat.label}</span>
                        <span>{stat.value}</span>
                    </div>        
                ))
            }
        </div>
    </div>
      </div>
    </div>
  )
}

export default Student