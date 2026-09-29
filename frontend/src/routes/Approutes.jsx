import {createBrowserRouter, RouterProvider} from 'react-router'
import HomeProtected from './protected/HomeProtected'
import HomeLayout from '../app/layout/HomeLayout'
import AuthProtected from './protected/AuthProtected'
import AuthLayout from '../app/layout/AuthLayout'
import LoginPage from '../feature/auth/ui/pages/LoginPage'
import RegisterPage from '../feature/auth/ui/pages/RegisterPage'
import UserProtected from './protected/UserProtected'
import UserLayout from '../app/layout/UserLayout'
import UserDashboard from '../feature/user/ui/pages/UserDashboard'
import SellerProtected from './protected/SellerProtected'
import SellerLayout from '../app/layout/SellerLayout'
import SellerDashboard from '../feature/seller/ui/pages/SellerDashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeProtected />,
    children: [
      {
        path: '',
        element: <HomeLayout />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthProtected />,
    children: [
      {
        path: '',
        element: <AuthLayout />,
        children: [
          {
            path: '',
            element: <LoginPage />
          },
          {
            path:'register',
            element: <RegisterPage />
          }
        ]
      }
    ]
  },
  {
    page: '/user',
    element: <UserProtected />,
    children: [
      {
        path: '',
        element: <UserLayout />,
        children: [
          {
            path: '',
            element: <UserDashboard />
          }
        ]
      }
    ]
  },
  {
    path: '/seller',
    element: <SellerProtected />,
    children: [
      {
        path: '',
        element: <SellerLayout />,
        children: [
          {
            path: '',
            element: <SellerDashboard />
          }
        ]
      }
    ]
  }
])

const Approutes = () => {
  return <RouterProvider router={router}/>
}

export default Approutes