import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/homePage'
import ProfilesPage from './pages/profilesPage'
import ErrorPage from './pages/errorPage'
import ProfilePage from './pages/profilePage'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage/>,
  errorElement: <ErrorPage/>,
},
{
  path:'/profiles',
  element: <ProfilesPage/>,
  children: [ 
  {
    path:'/profiles/:profileId',
    element: <ProfilePage/>,
  }
  ]
}

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
