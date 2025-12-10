import React, { useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Postscontext } from "../context/Postscontext";

const useQuery = () => {
  return new URLSearchParams(useLocation().search); // to get the query params
};

const Home = () => {
  const query = useQuery();
  const searchTerm = query.get("search") || "";
  const [search, setSearch] = useState(searchTerm);
  const { posts } = useContext(Postscontext);
  const navigate = useNavigate();
  const Posts = posts || [];

  console.log("Posts from context:", Posts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const searchValue = form.get('search')
    navigate(`/?search=${encodeURIComponent(searchValue)}`);
  };

  const filteredPosts = posts.filter(post=> post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="mt-6 p-4 rounded-lg shadow-md bg-white">
      {/* Search Post */}
      <div>
        <h1>Search BLog React</h1>
        <div className="flex flex-col ">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-gray-400 border rounded-sm p-2 mr-2"
            />
            <button
              type="submit"
              className="bg-red-500 p-2 rounded-lg text-white cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {/* Posts List */}
      <div>
        <h1 className="font-bold text-2xl text-gray-600 mt-6 mb-4">
          Posts List
        </h1>
        {posts.length > 0 ? (
          <div className="mt-6 p-4 rounded-lg shadow-md bg-white">
            {posts.map((post) => (
              <div key={post.id} className="border-b border-gray-300 py-4">
                <h2 className="font-bold text-xl text-gray-700">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Not Found any Posts</p>
        )}
      </div>
    </div>
  );
};

export default Home;
