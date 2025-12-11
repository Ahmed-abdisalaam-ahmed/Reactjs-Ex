import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Postscontext } from '../context/Postscontext';


const Postdetails = () => {
  const {id} = useParams();
  const {posts} = useContext(Postscontext);

  const PostInfo = posts.filter(post => post.id == id)[0];

  return (
    <div >
        <h1>UserProfile</h1>
        <p>PostId : {PostInfo.id}</p>
        <p>title : {PostInfo.title}</p>
        <p>content : {PostInfo.content}</p>
    </div>
  )
}

export default Postdetails