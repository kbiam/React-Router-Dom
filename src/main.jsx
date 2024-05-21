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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
