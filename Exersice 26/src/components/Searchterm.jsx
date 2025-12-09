import React from 'react'

const Searchterm = () => {

  return (
      <div className="mt-6 bg- p-4 rounded-lg shadow-md bg-white">
        <div className="mb-4 flex flex-col gap-6">
          <h1 className="font-bold text-2xl text-gray-600">Create a New Port</h1>
          <label>
            Title: 
            <input type="text" className="border-gray-400 border rounded-lg"/>
          </label>
          <label>
            content:
            <textarea className="border-gray-400 border rounded-lg"></textarea>
          </label>
        </div>
      </div>
  )
}

export default Searchterm