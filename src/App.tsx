import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Signup />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/signin',
      element: <Signin />
    },
    {
      path: '/blog/:id',
      element: <Blog />
    },
    {
      path: '/blogs',
      element: <Blogs />
    },
    {
      path: '/publish',
      element: <Publish />
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
