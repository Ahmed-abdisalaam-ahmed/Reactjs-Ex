import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './components/NotFound'
import Login from './components/Login'
import ProtectedRouter from './components/ProtectedRouter'
import CreatePost from './components/CreatePost'

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound/> ,
        children: [
            {
                path: '/createPost',
                element: <ProtectedRouter element={<CreatePost/>} />,
            },
            {
                path: 'post',
                element: <div></div>,
            },
            {
                path: 'login',
                element: <Login/>,
            }
        ]
    }
])

export default Routers