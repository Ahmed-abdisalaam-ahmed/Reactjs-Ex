import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './components/NotFound'

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound/> ,
        children: [
            {
                index: true,   
                element: <div>Home</div>,
            },]
    }
])

export default Routers