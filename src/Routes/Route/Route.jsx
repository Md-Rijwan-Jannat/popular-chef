import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Components/Login/Login/Login";
import Register from "../../Components/Login/Register/Register";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Blog from "../../Pages/Blogs/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:'/',
            element: <PrivateRoute><Home/></PrivateRoute>
        },
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/register',
            element: <Register/>
        },
        {
            path:'/blog',
            element: <Blog/>
        },
      ]
    },
  ]);
export default router;  