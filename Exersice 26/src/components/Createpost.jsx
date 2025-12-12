import React, { useContext, useState } from "react";
import { Postscontext } from "../context/Postscontext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
      postAdd({
        title : isTitle, 
        content :isContent});
    setTitle('');
    setContent('');
  };
  const { postAdd } = useContext(Postscontext);
  const [isTitle, setTitle] = useState('');
  const [isContent,setContent] = useState('');

  return (
    <div className="mt-6 p-4 rounded-lg shadow-md bg-white">
      <div className="mb-4 flex flex-col gap-6">
        <h1 className="font-bold text-2xl text-gray-600">Create a New Port</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label>
            Title :
            <input
              type="text"
              className="border-gray-400 border rounded-sm"
              value={isTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Content :
            <textarea 
            value={isContent}
            onChange={(e) =>setContent(e.target.value)}
            className="border-gray-400 border rounded-sm w-78 h-40"></textarea>
          </label>
          <button
            type="submit"
            className="bg-red-600 text-white border p-2 cursor-pointer rounded-lg"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
