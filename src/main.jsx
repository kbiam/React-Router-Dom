import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout'
import './index.css'
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useParams } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Link } from 'react-router-dom'
import User from './components/User'
import Github from './components/Github/Github'
import { userInfo } from './components/Github/Github'
import Proposal from './components/Proposal/Proposal'
const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <div>
    <nav>
    &nbsp;<NavLink to="/">Home</NavLink>&nbsp;
      &nbsp;<NavLink to="/about">About</NavLink>&nbsp;
      &nbsp;<NavLink to="/contact">Contact</NavLink>&nbsp;
      &nbsp;<NavLink to="/user/1/kush">User</NavLink>&nbsp;
      &nbsp;<NavLink to="/github">Github</NavLink>&nbsp;
      &nbsp;<NavLink to="/proposal">Proposal</NavLink>&nbsp;
    </nav>
    <Outlet/>
    </div>,
    children:[
      {
        path:'',
        element:
        <div>
          <h1>Welcome to Home Page</h1>
        </div>
      },
      {
        path:'about',
        element:
        <div>
          <h1>Welcome to about page</h1>
        </div>

      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'user/:userid/:username',
        element: <User/>
      },
      {

        path:'github',
        loader: async () => {
          const data = await userInfo();
          return data;
        },
        element:
        <Github/>
      },
      {
        path:'proposal',
        element:<Proposal/>
      },
      {
        path:'yes',
        element:
        <div>
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHc5YWpwZWNxN3U0M3d2dWtpZzdnN2o2OGo5OTJscWRnbGtlbnhsYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7B2xG5JxShC92rd1WL/giphy.gif" alt="" />
        </div>
      },
      {
        path:'no',
        element:
        <div>
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWQ5dzg2aWFiY2NwYWV0a3VkZW1kZWhrZ3V3ZWkyb2x2Ym05YzFpZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rDUjFhC3FYJmaJpTEn/giphy.gif" alt="" />
        </div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
