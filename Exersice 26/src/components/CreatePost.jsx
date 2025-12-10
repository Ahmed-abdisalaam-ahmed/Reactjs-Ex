import React from 'react'

const CreatePost = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="mt-6 p-4 rounded-lg shadow-md bg-white">
      <div className="mb-4 flex flex-col gap-6">
        <h1 className="font-bold text-2xl text-gray-600">Create a New Port</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <label>
            Title :
            <input 
              type="text"
              className="border-gray-400 border rounded-sm" />
          </label>
          <label>
            Content :
            <textarea className="border-gray-400 border rounded-sm w-78 h-40"></textarea>
          </label>
          <button className='bg-red-600 text-white border p-2 cursor-pointer rounded-lg'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost