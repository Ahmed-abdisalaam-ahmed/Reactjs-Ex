import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './components/NotFound'
import PostDetails from './components/PostDetails'
import ProtectedRouter from './components/ProtectedRouter'
import CreatePost from './components/CreatePost'
import Login from './components/Login'

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/createPost',
                element: <ProtectedRouter element={<CreatePost/>} />,
            },
            {
                path: '/postdetails',
                element: <PostDetails />,
            },
            {
                path: '/Login',
                element: <Login />,
            },
        ],
    },
])

export default Routers