import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Blog from "../Pages/Blogs/Blog";
import Banner from "../Components/Banner/Banner";
import SignUp from "../Components/Register/SignUp/SignUp";
import React from "react";
import Login from "../Components/Register/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Home = React.lazy(() => import ('../Pages/Home/Home/Home'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <React.Suspense fallback={<div className="h-96 flex justify-center items-center"><progress className="progress w-56"></progress></div>}><Home /></React.Suspense>
      },
      {
        path: '/login',
        element: <React.Suspense fallback={<div className="h-96 flex justify-center items-center"><progress className="progress w-56"></progress></div>}><Login /></React.Suspense>
      },
      {
        path: '/register',
        element: <React.Suspense fallback={<div className="h-96 flex justify-center items-center"><progress className="progress w-56"></progress></div>}><SignUp /></React.Suspense>
      },
      {
        path: '/blog',
        element: <React.Suspense fallback={<div className="h-96 flex justify-center items-center"><progress className="progress w-56"></progress></div>}><Blog /></React.Suspense>
      },
      {
        path: '/recipe/:id',
        element: <PrivateRoute><Banner /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-chef-recipe-server-md-rijwan-jannat.vercel.app/chef/${params.id}`)
      },
    ]
  },
]);
export default router;  