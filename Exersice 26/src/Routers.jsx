import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './components/NotFound'
import Login from './components/Login'
import ProtectedRouter from './components/ProtectedRouter'
import Postdetails from './components/Postdetails'
import Home from './components/Home'
import CreatePost from './components/Createpost'

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound/> ,
        children: [
            {
                index: true,
                element:<Home />,
            },
            {
                path: '/createPost',
                element: <ProtectedRouter element={<CreatePost/>} />,
            },
            {
                path: 'post/:id',
                element: <Postdetails/>,
            },
            {
                path: 'login',
                element: <Login/>,
            }
        ]
    }
])

export default Routers