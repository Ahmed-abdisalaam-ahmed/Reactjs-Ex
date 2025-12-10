import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/Authcontext.jsx'
import { Router, RouterProvider } from 'react-router-dom'
import Routers from './Routers.jsx'
import {PostsProvider } from './context/Postscontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
        <RouterProvider router={Routers}/>
      </PostsProvider>
    </AuthProvider>
  </StrictMode>,
)
