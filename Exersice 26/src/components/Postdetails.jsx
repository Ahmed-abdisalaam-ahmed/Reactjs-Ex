import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Postscontext } from "../context/Postscontext";

const Postdetails = () => {
  const { id } = useParams();
  const { posts } = useContext(Postscontext);
  const navigate = useNavigate();

  const PostInfo = posts.filter((post) => post.id == id)[0];

  const findPost = posts.findIndex((post) => post.id === Number(id));
  console.log(`Post id = ${findPost}`);

  const prevPost = posts[findPost - 1];
  const nextPost = posts[findPost + 1];
  const goPrev = () => {
    if (prevPost) navigate(`/post/${prevPost.id}`);
  };

  const goNext = () => {
    if (nextPost) navigate(`/post/${nextPost.id}`);
  };
  const isNextDisabled = findPost >= posts.length - 1;
  const isPrevDisabled = findPost == 0;

  return (
    <div className="mt-6 p-4 rounded-lg shadow-md bg-white">
      <p className="font-bold text-2xl mb-2">Title : {PostInfo.title}</p>
      <p className="font-bold text-2xl mb-2">Content : {PostInfo.content}</p>
      <div className="space-x-2">
        <button
          className={`p-2 rounded-lg text-white text-xl transition
    ${
      isPrevDisabled
        ? "bg-gray-400 cursor-not-allowed opacity-50"
        : "bg-green-500 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
    }`
  }       onClick={goPrev}
          disabled={isPrevDisabled}
        >
          Prev
        </button>
        <button
          className={`p-2 rounded-lg text-white text-xl transition
    ${
      isNextDisabled
        ? "bg-gray-400 cursor-not-allowed opacity-50"
        : "bg-green-500 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
    }`
  }
          onClick={goNext}
          disabled={isNextDisabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Postdetails;
