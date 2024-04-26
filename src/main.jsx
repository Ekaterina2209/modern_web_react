import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ErrorPage from './error-page.jsx'

import About from './labs/lab7/About.jsx'

import Lab1 from './labs/lab1/Lab1.jsx'
import Lab2 from './labs/lab2/Lab2.jsx'
import Lab3 from './labs/lab3/Lab3.jsx'
import Lab4 from './labs/lab4/Lab44.jsx'
import Lab5 from './labs/lab5/Lab5.jsx'
import Lab6 from './labs/lab6/Lab6.jsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path: '/1',
                element: <Lab1></Lab1>
            },
            {
                path: '/2',
                element: <Lab2></Lab2>
            },
            { 
                path: '/3',
                element: <Lab3></Lab3>
            },
            {
                path: '/4',
                element: <Lab4></Lab4>
            },
            {
                path: '/5',
                element: <Lab5></Lab5>
            },
            { 
                path: '/6',
                element: <Lab6></Lab6>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)
